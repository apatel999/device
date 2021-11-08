
use DeviceDb;

IF NOT EXISTS (
		SELECT * FROM information_schema.TABLES
		WHERE table_name = 'Device')
BEGIN
CREATE TABLE [Device](
	[DeviceId] [int] IDENTITY(1,1) PRIMARY KEY NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[Status] [int] NOT NULL,
	[Type] [int] NOT NULL,
	[Temprature] decimal(5,3) NULL,
	[CreatedDateUtc] [datetime2](7) NOT NULL DEFAULT (sysutcdatetime()),
	[ModifiedDateUtc] [datetime2](7) NOT NULL DEFAULT (sysutcdatetime())
)
END

IF NOT EXISTS (
		SELECT * FROM information_schema.TABLES
		WHERE table_name = 'DeviceRelation')
BEGIN
CREATE TABLE [DeviceRelation](
	[DeviceRelationId] [int] IDENTITY(1,1) PRIMARY KEY NOT NULL,
	[DeviceId] [int] NOT NULL,
	[RelatedDeviceId] [int] NOT NULL,
	[CreatedDateUtc] [datetime2](7) NOT NULL DEFAULT (sysutcdatetime()),
	[ModifiedDateUtc] [datetime2](7) NOT NULL DEFAULT (sysutcdatetime())
)
END


IF NOT EXISTS(
	SELECT * FROM information_schema.TABLE_CONSTRAINTS
	WHERE constraint_type = 'FOREIGN KEY' AND constraint_name = 'FK_DeviceRelation_DeviceId'
)
BEGIN
    ALTER TABLE DeviceRelation ADD CONSTRAINT FK_DeviceRelation_DeviceId
    FOREIGN KEY(DeviceId) REFERENCES Device(DeviceId);
END

IF NOT EXISTS(
	SELECT * FROM information_schema.TABLE_CONSTRAINTS
	WHERE constraint_type = 'FOREIGN KEY' AND constraint_name = 'FK_DeviceRelation_RelatedDeviceId'
)
BEGIN
    ALTER TABLE DeviceRelation ADD CONSTRAINT FK_DeviceRelation_RelatedDeviceId
    FOREIGN KEY(RelatedDeviceId) REFERENCES Device(DeviceId);
END



-- Test data
SET IDENTITY_INSERT Device ON;

INSERT INTO Device(DeviceId, Name, Status,Type, Temprature) 
VALUES
(1, 'Desktop 12', 1, 3, 10.02),
(2, 'iPhone 342', 1, 1, 13.34),
(3, 'Android 3', 2, 1, 14.02),
(4, 'Laptop 456', 2, 4, 22.02),
(5, 'iPad 456', 1, 2, 23.02) 

SET IDENTITY_INSERT Device OFF;

SET IDENTITY_INSERT DeviceRelation ON;
INSERT INTO DeviceRelation(DeviceRelationId, DeviceId, RelatedDeviceId) 
VALUES
(1, 1, 2),
(2, 1, 5),
(3, 2, 2),
(4, 2, 3),
(5, 2, 4),
(4, 3,1),
(5, 3, 4)

SET IDENTITY_INSERT DeviceRelation OFF;