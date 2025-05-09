from django.db import models

class AccountDatabase(models.Model):
    id = models.AutoField(primary_key=True, null=False, unique=True)  # Auto-incrementing primary key for the account
    username = models.CharField(null=False, unique=True)  # Unique username for the account
    email = models.EmailField(null=False, unique=True)  # Unique email address for the account
    password = models.CharField()  # Password for the account, hashed for security
    created_at = models.DateTimeField(auto_now_add=True)  # Timestamp of when the account was created

    def __str__(self):
        return self.username  # String representation of the model, returns the username