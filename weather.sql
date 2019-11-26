USE [DataContext]
GO

INSERT INTO [dbo].[WeatherForecasts]
           ([Date]
           ,[TemperatureC]
           ,[Summary])
     VALUES
           (GETDATE()
           ,35
           ,'Sweltering')
GO

INSERT INTO [dbo].[WeatherForecasts]
           ([Date]
           ,[TemperatureC]
           ,[Summary])
     VALUES
           (GETDATE()
           ,5
           ,'Bracing')
GO

INSERT INTO [dbo].[WeatherForecasts]
           ([Date]
           ,[TemperatureC]
           ,[Summary])
     VALUES
           (GETDATE()
           ,27
           ,'Parfait')
GO


