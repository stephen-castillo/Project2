-- Create a new database called 'quickdecks'

-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT name quickdecks
        FROM sys.databases
        WHERE name = N'quickdecks'
        
)
CREATE DATABASE quickdecks

GO