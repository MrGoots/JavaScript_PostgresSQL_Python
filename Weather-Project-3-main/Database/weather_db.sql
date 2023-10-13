
DROP TABLE IF EXISTS albany CASCADE;
DROP TABLE IF EXISTS honolulu CASCADE;
DROP TABLE IF EXISTS juneau CASCADE;
DROP TABLE IF EXISTS sacramento CASCADE;
DROP TABLE IF EXISTS topeka CASCADE;

-- creating 'Albany' table in weather_db
CREATE TABLE Albany (
    STATION FLOAT NOT NULL PRIMARY KEY,
    DATE TIMESTAMP NOT NULL PRIMARY KEY,
    REPORT_TYPE VARCHAR NOT NULL,
    BackupLatitude FLOAT NOT NULL,
    BackupLongitude FLOAT NOT NULL,
    BackupName VARCHAR NOT NULL,
    DailyAverageDewPointTemperature FLOAT,
    DailyAverageDryBulbTemperature FLOAT,
    DailyAverageRelativeHumidity FLOAT,
    DailyAverageSeaLevelPressure FLOAT,
    DailyAverageStationPressure FLOAT,
    DailyAverageWetBulbTemperature FLOAT,
    DailyAverageWindSpeed FLOAT,
    DailyCoolingDegreeDays FLOAT,
    DailyDepartureFromNormalAverageTemperature FLOAT,
    DailyHeatingDegreeDays FLOAT,
    DailyMaximumDryBulbTemperature FLOAT,
    DailyMinimumDryBulbTemperature FLOAT,
    DailyPeakWindDirection VARCHAR,
    DailyPeakWindSpeed VARCHAR,
    DailyPrecipitation VARCHAR,
    DailySnowDepth VARCHAR,
    DailySnowfall VARCHAR,
    DailySustainedWindDirection FLOAT,
    DailySustainedWindSpeed VARCHAR
);

-- creating 'Honolulu' table in weather_db
CREATE TABLE Honolulu (
    STATION FLOAT   NOT NULL PRIMARY KEY,
    DATE TIMESTAMP   NOT NULL,
    REPORT_TYPE VARCHAR   NOT NULL,
    BackupLatitude FLOAT   NOT NULL,
    BackupLongitude FLOAT   NOT NULL,
    BackupName VARCHAR   NOT NULL,
    DailyAverageDewPointTemperature FLOAT,
    DailyAverageDryBulbTemperature FLOAT,
    DailyAverageRelativeHumidity FLOAT,
    DailyAverageSeaLevelPressure FLOAT,
    DailyAverageStationPressure FLOAT,
    DailyAverageWetBulbTemperature FLOAT,
    DailyAverageWindSpeed FLOAT,
    DailyCoolingDegreeDays FLOAT,
    DailyDepartureFromNormalAverageTemperature FLOAT,
    DailyHeatingDegreeDays FLOAT,
    DailyMaximumDryBulbTemperature FLOAT,
    DailyMinimumDryBulbTemperature FLOAT,
    DailyPeakWindDirection VARCHAR,
    DailyPeakWindSpeed VARCHAR,
    DailyPrecipitation VARCHAR,
    DailySnowDepth VARCHAR,
    DailySnowfall VARCHAR,
    DailySustainedWindDirection FLOAT,
    DailySustainedWindSpeed VARCHAR,
    FOREIGN KEY (DATE) REFERENCES Albany(DATE)
);

-- creating 'Juneau' table in weather_db
CREATE TABLE Juneau (
    STATION FLOAT   NOT NULL PRIMARY KEY,
    DATE TIMESTAMP   NOT NULL,
    REPORT_TYPE VARCHAR   NOT NULL,
    BackupLatitude FLOAT   NOT NULL,
    BackupLongitude FLOAT   NOT NULL,
    BackupName VARCHAR   NOT NULL,
    DailyAverageDewPointTemperature FLOAT,
    DailyAverageDryBulbTemperature FLOAT,
    DailyAverageRelativeHumidity FLOAT,
    DailyAverageSeaLevelPressure FLOAT,
    DailyAverageStationPressure FLOAT,
    DailyAverageWetBulbTemperature FLOAT,
    DailyAverageWindSpeed FLOAT,
    DailyCoolingDegreeDays FLOAT,
    DailyDepartureFromNormalAverageTemperature FLOAT,
    DailyHeatingDegreeDays FLOAT,
    DailyMaximumDryBulbTemperature FLOAT,
    DailyMinimumDryBulbTemperature FLOAT,
    DailyPeakWindDirection VARCHAR,
    DailyPeakWindSpeed VARCHAR,
    DailyPrecipitation VARCHAR,
    DailySnowDepth VARCHAR,
    DailySnowfall VARCHAR,
    DailySustainedWindDirection FLOAT,
    DailySustainedWindSpeed VARCHAR,
    FOREIGN KEY (DATE) REFERENCES Albany(DATE)
);

-- creating 'Sacramento' table in weather_db
CREATE TABLE Sacramento (
    STATION FLOAT   NOT NULL PRIMARY KEY,
    DATE TIMESTAMP   NOT NULL,
    REPORT_TYPE VARCHAR   NOT NULL,
    BackupLatitude FLOAT   NOT NULL,
    BackupLongitude FLOAT   NOT NULL,
    BackupName VARCHAR   NOT NULL,
    DailyAverageDewPointTemperature FLOAT,
    DailyAverageDryBulbTemperature FLOAT,
    DailyAverageRelativeHumidity FLOAT,
    DailyAverageSeaLevelPressure FLOAT,
    DailyAverageStationPressure FLOAT,
    DailyAverageWetBulbTemperature FLOAT,
    DailyAverageWindSpeed FLOAT,
    DailyCoolingDegreeDays FLOAT,
    DailyDepartureFromNormalAverageTemperature FLOAT,
    DailyHeatingDegreeDays FLOAT,
    DailyMaximumDryBulbTemperature FLOAT,
    DailyMinimumDryBulbTemperature FLOAT,
    DailyPeakWindDirection VARCHAR,
    DailyPeakWindSpeed VARCHAR,
    DailyPrecipitation VARCHAR,
    DailySnowDepth VARCHAR,
    DailySnowfall VARCHAR,
    DailySustainedWindDirection FLOAT,
    DailySustainedWindSpeed VARCHAR,
    FOREIGN KEY (DATE) REFERENCES Albany(DATE)
);

-- creating 'Topeka' table in weather_db
CREATE TABLE Topeka (
    STATION FLOAT  NOT NULL PRIMARY KEY,
    DATE TIMESTAMP   NOT NULL,
    REPORT_TYPE VARCHAR   NOT NULL,
    BackupLatitude FLOAT   NOT NULL,
    BackupLongitude FLOAT   NOT NULL,
    BackupName VARCHAR   NOT NULL,
    DailyAverageDewPointTemperature FLOAT,
    DailyAverageDryBulbTemperature FLOAT,
    DailyAverageRelativeHumidity FLOAT,
    DailyAverageSeaLevelPressure FLOAT,
    DailyAverageStationPressure FLOAT,
    DailyAverageWetBulbTemperature FLOAT,
    DailyAverageWindSpeed FLOAT,
    DailyCoolingDegreeDays FLOAT,
    DailyDepartureFromNormalAverageTemperature FLOAT,
    DailyHeatingDegreeDays FLOAT,
    DailyMaximumDryBulbTemperature FLOAT,
    DailyMinimumDryBulbTemperature FLOAT,
    DailyPeakWindDirection VARCHAR,
    DailyPeakWindSpeed VARCHAR,
    DailyPrecipitation VARCHAR,
    DailySnowDepth VARCHAR,
    DailySnowfall VARCHAR,
    DailySustainedWindDirection FLOAT,
    DailySustainedWindSpeed VARCHAR,
    FOREIGN KEY (DATE) REFERENCES Albany(DATE)
);

-- Viewing the tables 
SELECT * FROM Albany;
SELECT * FROM Honolulu;	
SELECT * FROM Juneau;
SELECT * FROM Sacramento;
SELECT * FROM Topeka;

-- Data from csv files are imported to corresponding postgresql tables by using import/export function 







