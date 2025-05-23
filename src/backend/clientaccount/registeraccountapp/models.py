from django.db import models

class AccountDatabase(models.Model):
    id = models.AutoField(primary_key=True, null=False, unique=True)  # Auto-incrementing primary key for the account
    username = models.CharField(null=False)  # Unique username for the account/ uniqueness checked at registration for custom message
    email = models.EmailField(null=False)  # Unique email address for the account/ uniqueness checked at registration for custom message
    password = models.CharField()  # Password for the account
    created_at = models.DateTimeField(auto_now_add=True)  # Timestamp of when the account was created

    class Meta:
        managed = False  # Indicates that this model is not managed by Django migrations
        db_table = 'account'
        # Specifies the database table name for this model
    def __str__(self):
        return self.username  # String representation of the model, returns the username