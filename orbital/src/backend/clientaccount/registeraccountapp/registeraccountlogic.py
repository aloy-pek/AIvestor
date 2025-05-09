from rest_framework import serializers
from .models import AccountDatabase
from django.contrib.auth.hashers import make_password

class RegisterAccountLogic(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True) # password field is write only to prevent it from being exposed in API responses
    confirm_password = serializers.CharField(write_only=True) # confirm password field is write only to prevent it from being exposed in API responses

    class Meta:
        model = AccountDatabase
        fields = ['id', 'username', 'email', 'password', 'confirm_password', 'created_at'] # fields to be included in the serializer
        read_only_fields = ['id', 'created_at'] # fields that are read only and cannot be modified by the user

    def create(self, validated_data): # creates a new user account
        validated_data['password'] = make_password(validated_data['password']) # hashes the password before saving it to the database
        validated_data.pop('confirm_password') # removes the confirm password field from the validated data
        user = AccountDatabase.objects.create(**validated_data)
        return user

    def update(self, instance, validated_data): # updates an existing user account - unused until settings are changed to allow user to update their account
        instance.username = validated_data.get('username', instance.username)
        if 'password' in validated_data:
            instance.set_password(validated_data.get('password', instance.password))
        instance.save()
        return instance
    
    def validate_username(self, value):
        if AccountDatabase.objects.filter(username=value).exists(): # forces unqiueness of username
            raise serializers.ValidationError("Username already exists.")
        return value
    
    def validate_email(self, value):
        if AccountDatabase.objects.filter(email=value).exists(): # forces uniquess of email
            raise serializers.ValidationError("Email already exists.")
        return value
    
    def validate_password(self, value):
        if len(value) < 8: # can be modfied for additional password complexity checks
            raise serializers.ValidationError("Password must be at least 8 characters long.")
        return value
    
    def validate(self, value): # confirm password function
        if self.initial_data.get('password') != self.initial_data.get('confirm_password'):
            raise serializers.ValidationError("Passwords do not match.")
        return value
    