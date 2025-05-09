from django.contrib.auth.models import User
from rest_framework import serializers

class RegisterAccountLogic(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True) # password field is write only to prevent it from being exposed in API responses

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'created_at'] # fields to be included in the serializer

    def create(self, validated_data): # creates a new user account
        user = User.objects.create_user(**validated_data)
        return user

    def update(self, instance, validated_data): # updates an existing user account - unused until settings are changed to allow user to update their account
        instance.username = validated_data.get('username', instance.username)
        if 'password' in validated_data:
            instance.set_password(validated_data.get('password', instance.password))
        instance.save()
        return instance
    
    def valdiate_username(self, value):
        if User.objects.filter(username=value).exists(): # forces unqiueness of username
            raise serializers.ValidationError("Username already exists.")
        return value
    
    def validate_password(self, value):
        if len(value) < 8: # can be modfied for additional password complexity checks
            raise serializers.ValidationError("Password must be at least 8 characters long.")
        return value
    
    def confirm_password(self, value): # confirm password function
        if self.initial_data.get('password') != value:
            raise serializers.ValidationError("Passwords do not match.")
        return value
    