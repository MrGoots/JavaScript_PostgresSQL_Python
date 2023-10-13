-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/MblLDa
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "Albany" (
    "STATION" FLOAT   NOT NULL,
    "DATE" TIMESTEAMP   NOT NULL,
    "REPORT_TYPE" VARCHAR   NOT NULL,
    "BackupLatitude" FLOAT   NOT NULL,
    "BackupLongitude" FLOAT   NOT NULL,
    "BackupName" VARCHAR   NOT NULL,
    "DailyAverageDewPointTemperature" FLOAT   NOT NULL,
    "DailyAverageDryBulbTemperature" FLOAT   NOT NULL,
    "DailyAverageRelativeHumidity" FLOAT   NOT NULL,
    "DailyAverageSeaLevelPressure" FLOAT   NOT NULL,
    "DailyAverageStationPressure" FLOAT   NOT NULL,
    "DailyAverageWetBulbTemperature" FLOAT   NOT NULL,
    "DailyAverageWindSpeed" FLOAT   NOT NULL,
    "DailyCoolingDegreeDays" FLOAT   NOT NULL,
    "DailyDepartureFromNormalAverageTemperature" FLOAT   NOT NULL,
    "DailyHeatingDegreeDays" FLOAT   NOT NULL,
    "DailyMaximumDryBulbTemperature" FLOAT   NOT NULL,
    "DailyMinimumDryBulbTemperature" FLOAT   NOT NULL,
    "DailyPeakWindDirection" VARCHAR   NOT NULL,
    "DailyPeakWindSpeed" VARCHAR   NOT NULL,
    "DailyPrecipitation" VARCHAR   NOT NULL,
    "DailySnowDepth" VARCHAR   NOT NULL,
    "DailySnowfall" VARCHAR   NOT NULL,
    "DailySustainedWindDirection" FLOAT   NOT NULL,
    "DailySustainedWindSpeed" VARCHAR   NOT NULL,
    CONSTRAINT "pk_Albany" PRIMARY KEY (
        "STATION","DATE"
     )
);

CREATE TABLE "Honolulu" (
    "STATION" FLOAT   NOT NULL,
    "DATE" TIMESTAMP   NOT NULL,
    "REPORT_TYPE" VARCHAR   NOT NULL,
    "BackupLatitude" FLOAT   NOT NULL,
    "BackupLongitude" FLOAT   NOT NULL,
    "BackupName" VARCHAR   NOT NULL,
    "DailyAverageDewPointTemperature" FLOAT   NOT NULL,
    "DailyAverageDryBulbTemperature" FLOAT   NOT NULL,
    "DailyAverageRelativeHumidity" FLOAT   NOT NULL,
    "DailyAverageSeaLevelPressure" FLOAT   NOT NULL,
    "DailyAverageStationPressure" FLOAT   NOT NULL,
    "DailyAverageWetBulbTemperature" FLOAT   NOT NULL,
    "DailyAverageWindSpeed" FLOAT   NOT NULL,
    "DailyCoolingDegreeDays" FLOAT   NOT NULL,
    "DailyDepartureFromNormalAverageTemperature" FLOAT   NOT NULL,
    "DailyHeatingDegreeDays" FLOAT   NOT NULL,
    "DailyMaximumDryBulbTemperature" FLOAT   NOT NULL,
    "DailyMinimumDryBulbTemperature" FLOAT   NOT NULL,
    "DailyPeakWindDirection" VARCHAR   NOT NULL,
    "DailyPeakWindSpeed" VARCHAR   NOT NULL,
    "DailyPrecipitation" VARCHAR   NOT NULL,
    "DailySnowDepth" VARCHAR   NOT NULL,
    "DailySnowfall" VARCHAR   NOT NULL,
    "DailySustainedWindDirection" FLOAT   NOT NULL,
    "DailySustainedWindSpeed" VARCHAR   NOT NULL,
    CONSTRAINT "pk_Honolulu" PRIMARY KEY (
        "STATION"
     )
);

CREATE TABLE "Juneau" (
    "STATION" FLOAT   NOT NULL,
    "DATE" TIMESTAMP   NOT NULL,
    "REPORT_TYPE" VARCHAR   NOT NULL,
    "BackupLatitude" FLOAT   NOT NULL,
    "BackupLongitude" FLOAT   NOT NULL,
    "BackupName" VARCHAR   NOT NULL,
    "DailyAverageDewPointTemperature" FLOAT   NOT NULL,
    "DailyAverageDryBulbTemperature" FLOAT   NOT NULL,
    "DailyAverageRelativeHumidity" FLOAT   NOT NULL,
    "DailyAverageSeaLevelPressure" FLOAT   NOT NULL,
    "DailyAverageStationPressure" FLOAT   NOT NULL,
    "DailyAverageWetBulbTemperature" FLOAT   NOT NULL,
    "DailyAverageWindSpeed" FLOAT   NOT NULL,
    "DailyCoolingDegreeDays" FLOAT   NOT NULL,
    "DailyDepartureFromNormalAverageTemperature" FLOAT   NOT NULL,
    "DailyHeatingDegreeDays" FLOAT   NOT NULL,
    "DailyMaximumDryBulbTemperature" FLOAT   NOT NULL,
    "DailyMinimumDryBulbTemperature" FLOAT   NOT NULL,
    "DailyPeakWindDirection" VARCHAR   NOT NULL,
    "DailyPeakWindSpeed" VARCHAR   NOT NULL,
    "DailyPrecipitation" VARCHAR   NOT NULL,
    "DailySnowDepth" VARCHAR   NOT NULL,
    "DailySnowfall" VARCHAR   NOT NULL,
    "DailySustainedWindDirection" FLOAT   NOT NULL,
    "DailySustainedWindSpeed" VARCHAR   NOT NULL,
    CONSTRAINT "pk_Juneau" PRIMARY KEY (
        "STATION"
     )
);

CREATE TABLE "Sacramento" (
    "STATION" FLOAT   NOT NULL,
    "DATE" TIMESTAMP   NOT NULL,
    "REPORT_TYPE" VARCHAR   NOT NULL,
    "BackupLatitude" FLOAT   NOT NULL,
    "BackupLongitude" FLOAT   NOT NULL,
    "BackupName" VARCHAR   NOT NULL,
    "DailyAverageDewPointTemperature" FLOAT   NOT NULL,
    "DailyAverageDryBulbTemperature" FLOAT   NOT NULL,
    "DailyAverageRelativeHumidity" FLOAT   NOT NULL,
    "DailyAverageSeaLevelPressure" FLOAT   NOT NULL,
    "DailyAverageStationPressure" FLOAT   NOT NULL,
    "DailyAverageWetBulbTemperature" FLOAT   NOT NULL,
    "DailyAverageWindSpeed" FLOAT   NOT NULL,
    "DailyCoolingDegreeDays" FLOAT   NOT NULL,
    "DailyDepartureFromNormalAverageTemperature" FLOAT   NOT NULL,
    "DailyHeatingDegreeDays" FLOAT   NOT NULL,
    "DailyMaximumDryBulbTemperature" FLOAT   NOT NULL,
    "DailyMinimumDryBulbTemperature" FLOAT   NOT NULL,
    "DailyPeakWindDirection" VARCHAR   NOT NULL,
    "DailyPeakWindSpeed" VARCHAR   NOT NULL,
    "DailyPrecipitation" VARCHAR   NOT NULL,
    "DailySnowDepth" VARCHAR   NOT NULL,
    "DailySnowfall" VARCHAR   NOT NULL,
    "DailySustainedWindDirection" FLOAT   NOT NULL,
    "DailySustainedWindSpeed" VARCHAR   NOT NULL,
    CONSTRAINT "pk_Sacramento" PRIMARY KEY (
        "STATION"
     )
);

CREATE TABLE "Topeka" (
    "STATION" FLOAT   NOT NULL,
    "DATE" TIMESTAMP   NOT NULL,
    "REPORT_TYPE" VARCHAR   NOT NULL,
    "BackupLatitude" FLOAT   NOT NULL,
    "BackupLongitude" FLOAT   NOT NULL,
    "BackupName" VARCHAR   NOT NULL,
    "DailyAverageDewPointTemperature" FLOAT   NOT NULL,
    "DailyAverageDryBulbTemperature" FLOAT   NOT NULL,
    "DailyAverageRelativeHumidity" FLOAT   NOT NULL,
    "DailyAverageSeaLevelPressure" FLOAT   NOT NULL,
    "DailyAverageStationPressure" FLOAT   NOT NULL,
    "DailyAverageWetBulbTemperature" FLOAT   NOT NULL,
    "DailyAverageWindSpeed" FLOAT   NOT NULL,
    "DailyCoolingDegreeDays" FLOAT   NOT NULL,
    "DailyDepartureFromNormalAverageTemperature" FLOAT   NOT NULL,
    "DailyHeatingDegreeDays" FLOAT   NOT NULL,
    "DailyMaximumDryBulbTemperature" FLOAT   NOT NULL,
    "DailyMinimumDryBulbTemperature" FLOAT   NOT NULL,
    "DailyPeakWindDirection" VARCHAR   NOT NULL,
    "DailyPeakWindSpeed" VARCHAR   NOT NULL,
    "DailyPrecipitation" VARCHAR   NOT NULL,
    "DailySnowDepth" VARCHAR   NOT NULL,
    "DailySnowfall" VARCHAR   NOT NULL,
    "DailySustainedWindDirection" FLOAT   NOT NULL,
    "DailySustainedWindSpeed" VARCHAR   NOT NULL,
    CONSTRAINT "pk_Topeka" PRIMARY KEY (
        "STATION"
     )
);

ALTER TABLE "Honolulu" ADD CONSTRAINT "fk_Honolulu_DATE" FOREIGN KEY("DATE")
REFERENCES "Albany" ("DATE");

ALTER TABLE "Juneau" ADD CONSTRAINT "fk_Juneau_DATE" FOREIGN KEY("DATE")
REFERENCES "Albany" ("DATE");

ALTER TABLE "Sacramento" ADD CONSTRAINT "fk_Sacramento_DATE" FOREIGN KEY("DATE")
REFERENCES "Albany" ("DATE");

ALTER TABLE "Topeka" ADD CONSTRAINT "fk_Topeka_DATE" FOREIGN KEY("DATE")
REFERENCES "Albany" ("DATE");

