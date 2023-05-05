-- Create a new database called 'donated_tech'

-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT name donated_tech
        FROM sys.databases
        WHERE name = N'techGiveSA'
        
)
CREATE DATABASE donated_tech

GO