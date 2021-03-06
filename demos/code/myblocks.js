Blockly.defineBlocksWithJsonArray(
    [
        {
          "type": "NodeProfile",
          "message0": "ノードプロファイル %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "NodeProfile",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "動作状態  入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態  切",
                  "OperatingStatus  OFF"
                ],
                [
                  "異常発生状態  異常あり",
                  "FaultStatus  Fault"
                ],
                [
                  "異常発生状態  異常なし",
                  "FaultStatus  No Fault"
                ]
              ]
            }
          ]
        },
        {
          "type": "SuperClass",
          "message0": "スーパークラス %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "SuperClass",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "動作状態  入",
                  "OperationStatus  ON"
                ],
                [
                  "動作状態  切",
                  "OperationStatus  OFF"
                ],
                [
                  "異常発生状態  異常あり",
                  "FaultStatus  Fault"
                ],
                [
                  "異常発生状態  異常なし",
                  "FaultStatus  No Fault"
                ],
                [
                  "節電動作設定  節電動作中",
                  "PowerSavingOperationSetting  Power Saving"
                ],
                [
                  "節電動作設定  通常動作中",
                  "PowerSavingOperationSetting  No Power Saving"
                ]
              ]
            }
          ]
        },
        {
          "type": "GasLeakSensor",
          "message0": "ガス漏れセンサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "GasLeakSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "ガス漏れ発生状態  有",
                  "GasLeakOccurrenceStatus  YES"
                ],
                [
                  "ガス漏れ発生状態  無",
                  "GasLeakOccurrenceStatus  NO"
                ],
                [
                  "ガス漏れ発生状態リセット設定  リセット",
                  "GasLeakOccurrenceStatusResetting  Reset"
                ]
              ]
            }
          ]
        },
        {
          "type": "CrimePreventionSensor",
          "message0": "防犯センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "CrimePreventionSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "侵入発生状態  有",
                  "InvasionOccurrenceStatus  YES"
                ],
                [
                  "侵入発生状態  無",
                  "InvasionOccurrenceStatus  NO"
                ],
                [
                  "侵入発生状態リセット設定  リセット",
                  "InvasionOccurrenceStatusResetting  Reset"
                ]
              ]
            }
          ]
        },
        {
          "type": "EmergencyButton",
          "message0": "非常ボタン %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "EmergencyButton",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "非常発生状態  有",
                  "EmergencyOccurrenceStatus  YES"
                ],
                [
                  "非常発生状態  無",
                  "EmergencyOccurrenceStatus  NO"
                ],
                [
                  "非常発生状態リセット設定  リセット",
                  "EmergencyOccurrenceStatusResetting  Reset"
                ]
              ]
            }
          ]
        },
        {
          "type": "FirstAidSensor",
          "message0": "救急用センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "FirstAidSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "救急発生状態  有",
                  "FirstAidOccurrenceStatus  YES"
                ],
                [
                  "救急発生状態  無",
                  "FirstAidOccurrenceStatus  NO"
                ],
                [
                  "救急発生状態リセット設定  リセット",
                  "FirstAidOccurrenceStatusResetting  Reset"
                ]
              ]
            }
          ]
        },
        {
          "type": "EarthquakeSensor",
          "message0": "地震センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "EarthquakeSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "地震発生状態  有",
                  "EarthquakeOccurrenceStatus  YES"
                ],
                [
                  "地震発生状態  無",
                  "EarthquakeOccurrenceStatus  NO"
                ],
                [
                  "地震発生状態リセット設定  リセット",
                  "EarthquakeOccurrenceStatusResetting  Reset"
                ],
                [
                  "SI 値リセット設定  リセット",
                  "SiValueResetting  Reset"
                ],
                [
                  "倒壊発生状態  有",
                  "CollapseOccurrenceStatus  YES"
                ],
                [
                  "倒壊発生状態  無",
                  "CollapseOccurrenceStatus  NO"
                ],
                [
                  "倒壊発生状態リセット設定  リセット",
                  "CollapseOccurrenceStatusResetting  Reset"
                ]
              ]
            }
          ]
        },
        {
          "type": "ElectricLeakSensor",
          "message0": "漏電センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "ElectricLeakSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "漏電発生状態  有",
                  "ElectricLeakOccurrenceStatus  YES"
                ],
                [
                  "漏電発生状態  無",
                  "ElectricLeakOccurrenceStatus  NO"
                ],
                [
                  "漏電発生状態リセット設定  リセット",
                  "ElectricLeakOccurrenceStatusResetting  Reset"
                ]
              ]
            }
          ]
        },
        {
          "type": "HumanDetectionSensor",
          "message0": "人体検知センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "HumanDetectionSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "人体検知状態  有",
                  "HumanDetectionStatus  YES"
                ],
                [
                  "人体検知状態  無",
                  "HumanDetectionStatus  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "VisitorSensor",
          "message0": "来客センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "VisitorSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "来客検知状態  有",
                  "VisitorDetectionStatus  YES"
                ],
                [
                  "来客検知状態  無",
                  "VisitorDetectionStatus  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "CallSensor",
          "message0": "呼び出しセンサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "CallSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "呼び出し状態  有",
                  "CallStatus  YES"
                ],
                [
                  "呼び出し状態  無",
                  "CallStatus  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "CondensationSensor",
          "message0": "結露センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "CondensationSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "結露検出状態  有",
                  "CondensationDetectionStatus  YES"
                ],
                [
                  "結露検出状態  無",
                  "CondensationDetectionStatus  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "AirPollution",
          "message0": "空気汚染センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "AirPollution",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "空気汚染検出状態  有",
                  "AirPollutionDetectionStatus  YES"
                ],
                [
                  "空気汚染検出状態  無",
                  "AirPollutionDetectionStatus  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "OxygenSensor",
          "message0": "酸素センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "OxygenSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "IlluminanceSensor",
          "message0": "照度センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "IlluminanceSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "SoundSensor",
          "message0": "音センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "SoundSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "音検出状態  有",
                  "SoundDetectionStatus  YES"
                ],
                [
                  "音検出状態  無",
                  "SoundDetectionStatus  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "MailingSensor",
          "message0": "投函センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "MailingSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "投函検出状態  有",
                  "MailingDetectionStatus  YES"
                ],
                [
                  "投函検出状態  無",
                  "MailingDetectionStatus  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "WeightSensor",
          "message0": "重荷センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "WeightSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "重荷検出状態  有",
                  "WeightDetectionStatus  YES"
                ],
                [
                  "重荷検出状態  無",
                  "WeightDetectionStatus  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "TemperatureSensor",
          "message0": "温度センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "TemperatureSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "HumiditySensor",
          "message0": "湿度センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "HumiditySensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "RainSensor",
          "message0": "雨センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "RainSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "雨検出状態  有",
                  "RainDetectionStatus  YES"
                ],
                [
                  "雨検出状態  無",
                  "RainDetectionStatus  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "WaterLevelSensor",
          "message0": "水位センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "WaterLevelSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "水位超過検知状態  有",
                  "WaterLevelOverDetectionStatus  YES"
                ],
                [
                  "水位超過検知状態  無",
                  "WaterLevelOverDetectionStatus  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "BathWaterLevelSensor",
          "message0": "風呂水位センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "BathWaterLevelSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "風呂水位超過検知状態  有",
                  "BathWaterLevelOverDetectionStatus  YES"
                ],
                [
                  "風呂水位超過検知状態  無",
                  "BathWaterLevelOverDetectionStatus  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "BathHeatingStatusSensor",
          "message0": "風呂沸き上がりセンサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "BathHeatingStatusSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "風呂沸き上がり検知状態  有",
                  "BathHeatingDetectionStatus  YES"
                ],
                [
                  "風呂沸き上がり検知状態  無",
                  "BathHeatingDetectionStatus  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "WaterLeakSensor",
          "message0": "水漏れセンサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "WaterLeakSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "水漏れ検知状態  有",
                  "WaterLeakDetectionStatus  YES"
                ],
                [
                  "水漏れ検知状態  無",
                  "WaterLeakDetectionStatus  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "WaterOverflowSensor",
          "message0": "水あふれセンサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "WaterOverflowSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "水あふれ検知状態  有",
                  "WaterOverflowDetectionStatus  YES"
                ],
                [
                  "水あふれ検知状態  無",
                  "WaterOverflowDetectionStatus  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "FireSensor",
          "message0": "火災センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "FireSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "火災発生検知状態  有",
                  "FireOccurrenceDetectionStatus  YES"
                ],
                [
                  "火災発生検知状態  無",
                  "FireOccurrenceDetectionStatus  NO"
                ],
                [
                  "火災発生検知状態リセット設定  リセット",
                  "FireOccurrenceDetectionStatusResetting  Reset"
                ]
              ]
            }
          ]
        },
        {
          "type": "CigaretteSmokeSensor",
          "message0": "タバコ煙センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "CigaretteSmokeSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "煙（タバコ）検知状態  有",
                  "Smoke(cigarette)DetectionStatus  YES"
                ],
                [
                  "煙（タバコ）検知状態  無",
                  "Smoke(cigarette)DetectionStatus  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "Co2Sensor",
          "message0": "CO2センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "Co2Sensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "CO2濃度計測値",
                  "Measured value of CO2 concentration"
                ]
              ]
            }
          ]
        },
        {
          "type": "GasSensor",
          "message0": "ガスセンサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "GasSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "ガス検知状態  有",
                  "GasDetectionStatus  YES"
                ],
                [
                  "ガス検知状態  無",
                  "GasDetectionStatus  NO"
                ],
                [
                  "ガス濃度計測値",
                  "Measured value of gas concentration"
                ]
              ]
            }
          ]
        },
        {
          "type": "VocSensor",
          "message0": "VOCセンサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "VocSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "VOC検知状態  有",
                  "VocDetectionStatus  YES"
                ],
                [
                  "VOC検知状態  無",
                  "VocDetectionStatus  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "DifferentialPressureSensor",
          "message0": "差圧センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "DifferentialPressureSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "AirSpeedSensor",
          "message0": "風速センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "AirSpeedSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "OdorSensor",
          "message0": "臭いセンサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "OdorSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "臭い検知状態  有",
                  "OdorDetectionStatus  YES"
                ],
                [
                  "臭い検知状態  無",
                  "OdorDetectionStatus  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "FlameSensor",
          "message0": "炎センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "FlameSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "炎検知状態  有",
                  "FlameDetectionStatus  YES"
                ],
                [
                  "炎検知状態  無",
                  "FlameDetectionStatus  NO"
                ],
                [
                  "炎検知状態リセット設定  リセット",
                  "FlameDetectionStatusResetting  Reset"
                ]
              ]
            }
          ]
        },
        {
          "type": "ElectricEnergySensor",
          "message0": "電力量センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "ElectricEnergySensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "CurrentValueSensor",
          "message0": "電流量センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "CurrentValueSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "WaterFlowRate",
          "message0": "水流量センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "WaterFlowRate",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "MicromotionSensor",
          "message0": "微動センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "MicromotionSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "微動検知状態  有",
                  "MicromotionDetectionStatus  YES"
                ],
                [
                  "微動検知状態  無",
                  "MicromotionDetectionStatus  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "PassageSensor",
          "message0": "通過センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "PassageSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "通過検知方向状態  通過無し",
                  "PassageDetectionDirection  No passage"
                ],
                [
                  "通過検知方向状態  N",
                  "PassageDetectionDirection  N"
                ],
                [
                  "通過検知方向状態  NE",
                  "PassageDetectionDirection  NE"
                ],
                [
                  "通過検知方向状態  E",
                  "PassageDetectionDirection  E"
                ],
                [
                  "通過検知方向状態  SE",
                  "PassageDetectionDirection  SE"
                ],
                [
                  "通過検知方向状態  S",
                  "PassageDetectionDirection  S"
                ],
                [
                  "通過検知方向状態  SW",
                  "PassageDetectionDirection  SW"
                ],
                [
                  "通過検知方向状態  W",
                  "PassageDetectionDirection  W"
                ],
                [
                  "通過検知方向状態  NW",
                  "PassageDetectionDirection  NW"
                ],
                [
                  "通過検知方向状態  通過方向特定不可",
                  "PassageDetectionDirection  Direction unknown"
                ]
              ]
            }
          ]
        },
        {
          "type": "BedPresenceSensor",
          "message0": "在床センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "BedPresenceSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "在床検知状態  有",
                  "BedPresenceDetectionStatus  YES"
                ],
                [
                  "在床検知状態  無",
                  "BedPresenceDetectionStatus  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "OpenCloseSensor",
          "message0": "開閉センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "OpenCloseSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "開度検知状態２  有",
                  "DegreeOfOpeningDetectionStatus2  YES"
                ],
                [
                  "開度検知状態２  無",
                  "DegreeOfOpeningDetectionStatus2  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "ActivityAmountSensor",
          "message0": "活動量センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "ActivityAmountSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "HumanBodyDetectionLocation1",
          "message0": "人体位置センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "HumanBodyDetectionLocation1",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "SnowSensor",
          "message0": "雪センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "SnowSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "雪検知状態  有",
                  "SnowDetectionStatus  YES"
                ],
                [
                  "雪検知状態  無",
                  "SnowDetectionStatus  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "AirPressureSensor",
          "message0": "気圧センサ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "AirPressureSensor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "HomeAirConditioner",
          "message0": "家庭用エアコン %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "HomeAirConditioner",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "節電動作設定  入",
                  "PowerSavingOperationSetting  ON"
                ],
                [
                  "節電動作設定  切",
                  "PowerSavingOperationSetting  OFF"
                ],
                [
                  "ONタイマ予約設定  時刻予約、相対時間予約共に入",
                  "OnTimerSetting  Both the time- and relative time-based reservation functions are ON"
                ],
                [
                  "ONタイマ予約設定  予約切",
                  "OnTimerSetting  Both reservation functions are OFF"
                ],
                [
                  "ONタイマ予約設定  時刻予約のみ入",
                  "OnTimerSetting  Time-based reservation functions is ON"
                ],
                [
                  "ONタイマ予約設定  相対時間予約のみ入",
                  "OnTimerSetting  Relative time-based reservation functions is ON"
                ],
                [
                  "OFFタイマ予約設定  時刻予約、相対時間予約共に入",
                  "OffTimerSetting  Both the time- and relative time-based reservation functions are ON"
                ],
                [
                  "OFFタイマ予約設定  予約切",
                  "OffTimerSetting  Both reservation functions are OFF"
                ],
                [
                  "OFFタイマ予約設定  時刻予約のみ入",
                  "OffTimerSetting  Time-based reservation functions is ON"
                ],
                [
                  "OFFタイマ予約設定  相対時間予約のみ入",
                  "OffTimerSetting  Relative time-based reservation functions is ON"
                ],
                [
                  "風向自動設定  Auto",
                  "AutomaticControlOfAirFlowDirectionSetting  Automatic"
                ],
                [
                  "風向自動設定  非Auto",
                  "AutomaticControlOfAirFlowDirectionSetting  Non Auto"
                ],
                [
                  "風向自動設定  上下Auto",
                  "AutomaticControlOfAirFlowDirectionSetting  Auto(vertical)"
                ],
                [
                  "風向自動設定  左右Auto",
                  "AutomaticControlOfAirFlowDirectionSetting  Auto(horizontal)"
                ],
                [
                  "風向スイング設定  OFF",
                  "AutomaticSwingOfAirFlowSetting  OFF"
                ],
                [
                  "風向スイング設定  上下",
                  "AutomaticSwingOfAirFlowSetting  Vertical"
                ],
                [
                  "風向スイング設定  左右",
                  "AutomaticSwingOfAirFlowSetting  Holizontal"
                ],
                [
                  "風向スイング設定  上下左右",
                  "AutomaticSwingOfAirFlowSetting  Vertical and Holizontal"
                ],
                [
                  "風向上下設定  上",
                  "AirFlowDirection(vertical)Setting  Uppermost"
                ],
                [
                  "風向上下設定  下",
                  "AirFlowDirection(vertical)Setting  Lowermost"
                ],
                [
                  "風向上下設定  中央",
                  "AirFlowDirection(vertical)Setting  Central"
                ],
                [
                  "風向上下設定  上中",
                  "AirFlowDirection(vertical)Setting  Midpoint between uppermost and central"
                ],
                [
                  "風向上下設定  下中",
                  "AirFlowDirection(vertical)Setting  Midpoint between lowermost and central"
                ],
                [
                  "風向左右設定  右",
                  "AirFlowDirection(horizontal)Setting  Rightward"
                ],
                [
                  "風向左右設定  左",
                  "AirFlowDirection(horizontal)Setting  Leftward"
                ],
                [
                  "風向左右設定  中央",
                  "AirFlowDirection(horizontal)Setting  Central"
                ],
                [
                  "風向左右設定  左右",
                  "AirFlowDirection(horizontal)Setting  Rightward and leftward"
                ],
                [
                  "特殊状態  通常状態",
                  "SpecialState  Normal operation"
                ],
                [
                  "特殊状態  除霜状態",
                  "SpecialState  Defrosting"
                ],
                [
                  "特殊状態  予熱状態",
                  "SpecialState  Preheating"
                ],
                [
                  "特殊状態  排熱状態",
                  "SpecialState  Heat removal"
                ],
                [
                  "非優先状態  通常状態",
                  "NonPriorityState  Normal"
                ],
                [
                  "非優先状態  非優先状態",
                  "NonPriorityState  Non-priority"
                ],
                [
                  "運転モード設定  自動",
                  "OperationModeSetting  Automatic"
                ],
                [
                  "運転モード設定  冷房",
                  "OperationModeSetting  Cooling"
                ],
                [
                  "運転モード設定  暖房",
                  "OperationModeSetting  Heating"
                ],
                [
                  "運転モード設定  除湿",
                  "OperationModeSetting  Dehumidification"
                ],
                [
                  "運転モード設定  送風",
                  "OperationModeSetting  Air circulation"
                ],
                [
                  "運転モード設定  その他",
                  "OperationModeSetting  Other"
                ],
                [
                  "温度自動設定  入",
                  "AutomaticTemperatureControlSetting  ON"
                ],
                [
                  "温度自動設定  切",
                  "AutomaticTemperatureControlSetting  OFF"
                ],
                [
                  "急速動作モード設定  通常運転",
                  "NormalHighspeedSilentOperationSetting  Normal"
                ],
                [
                  "急速動作モード設定  急速",
                  "NormalHighspeedSilentOperationSetting  High speed"
                ],
                [
                  "急速動作モード設定  静音",
                  "NormalHighspeedSilentOperationSetting  Silent"
                ],
                [
                  "温度設定値  不明",
                  "SetTemperatureValue  Undefined"
                ],
                [
                  "冷房モード時温度設定値  不明",
                  "SetTemperatureValueInCoolingMode  Undefined"
                ],
                [
                  "暖房モード時温度設定値  不明",
                  "SetTemperatureValueInHeatingMode  Undefined"
                ],
                [
                  "除湿モード時温度設定値  不明",
                  "SetTemperatureValueInDehumidifyingMode  Undefined"
                ],
                [
                  "吹き出し温度計測値  不明",
                  "MeasuredCooledAirTemperature  Undefined"
                ],
                [
                  "外気温度計測値  不明",
                  "MeasuredOutdoorAirTemperature  Undefined"
                ],
                [
                  "相対温度設定値  不明",
                  "RelativeTemperatureSetting  Undefined"
                ],
                [
                  "換気モード設定  換気ON（排気方向）",
                  "VentilationFunctionSetting  Ventilation function ON(outlet direction)"
                ],
                [
                  "換気モード設定  換気OFF",
                  "VentilationFunctionSetting  Ventilation function OFF"
                ],
                [
                  "換気モード設定  換気ON（吸気方向）",
                  "VentilationFunctionSetting  Ventilation function ON(intake direction)"
                ],
                [
                  "換気モード設定  換気ON（吸排気方向）",
                  "VentilationFunctionSetting  Ventilation function ON(outlet and intake direction)"
                ],
                [
                  "加湿モード設定  入",
                  "HumidifierFunctionSetting  ON"
                ],
                [
                  "加湿モード設定  切",
                  "HumidifierFunctionSetting  OFF"
                ],
                [
                  "換気風量設定  自動",
                  "VentilationAirFlowRateSetting  Automatic"
                ],
                [
                  "加湿量設定  自動",
                  "DegreeOfHumidificationSetting  Automatic"
                ],
                [
                  "特別運転モード設定  設定なし",
                  "SpecialFunctionSetting  No setting"
                ],
                [
                  "特別運転モード設定  衣類乾燥",
                  "SpecialFunctionSetting  Clothes dryer function"
                ],
                [
                  "特別運転モード設定  結露抑制",
                  "SpecialFunctionSetting  Condensation suppressorfunction"
                ],
                [
                  "特別運転モード設定  ダニカビ抑制",
                  "SpecialFunctionSetting  Mite and mold control function"
                ],
                [
                  "特別運転モード設定  強制除霜",
                  "SpecialFunctionSetting  Active defrosting function"
                ],
                [
                  "空気清浄モード設定  入",
                  "AirPurificationModeSetting  ON"
                ],
                [
                  "空気清浄モード設定  切",
                  "AirPurificationModeSetting  OFF"
                ],
                [
                  "ブザー  ブザー音発生",
                  "Buzzer  Buzzer sound generation"
                ]
              ]
            }
          ]
        },
        {
          "type": "VentilationFan",
          "message0": "換気扇 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "VentilationFan",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "換気風量設定  自動",
                  "AirFlowRateSetting  Automatic"
                ],
                [
                  "換気自動設定  入",
                  "VentilationAutoSetting  ON"
                ],
                [
                  "換気自動設定  切",
                  "VentilationAutoSetting  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "AirConditionerVentilationFan",
          "message0": "空調換気扇 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "AirConditionerVentilationFan",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "換気風量設定  自動",
                  "SetValueOfVentilationAirFlowRate  Automatic"
                ],
                [
                  "換気モード自動設定  AUTO",
                  "VentilationModeAutomaticModeSetting  Automatic"
                ],
                [
                  "換気モード自動設定  非AUTO",
                  "VentilationModeAutomaticModeSetting  Non-automatic"
                ],
                [
                  "換気方式設定  送風換気",
                  "VentilationMethodSetting  Blowing ventilation "
                ],
                [
                  "換気方式設定  空調換気",
                  "VentilationMethodSetting  Air conditioning ventilation"
                ],
                [
                  "換気モード設定  普通換気",
                  "VentilationModeSetting  normal"
                ],
                [
                  "換気モード設定  熱交換換気",
                  "VentilationModeSetting  heat-exchange"
                ],
                [
                  "換気モード設定  冷房換気",
                  "VentilationModeSetting  cooling"
                ],
                [
                  "換気モード設定  暖房換気",
                  "VentilationModeSetting  heating"
                ],
                [
                  "換気モード設定  除湿換気",
                  "VentilationModeSetting  dehumidifying"
                ],
                [
                  "換気モード設定  加湿換気",
                  "VentilationModeSetting  humidifying"
                ],
                [
                  "換気モード設定  その他換気",
                  "VentilationModeSetting  other"
                ],
                [
                  "換気自動設定  AUTO",
                  "VentilationAutoSetting  Automatic"
                ],
                [
                  "換気自動設定  非AUTO",
                  "VentilationAutoSetting  Non-automatic"
                ],
                [
                  "煙（タバコ）検知状態  有",
                  "Smoke(cigarette)DetectionStatus  YES"
                ],
                [
                  "煙（タバコ）検知状態  無",
                  "Smoke(cigarette)DetectionStatus  NO"
                ],
                [
                  "汚れ検知状態  有",
                  "PollutionDetectionStatus  YES"
                ],
                [
                  "汚れ検知状態  無",
                  "PollutionDetectionStatus  NO"
                ],
                [
                  "熱交換器動作設定  入",
                  "HeatExchangerOperationSetting  ON"
                ],
                [
                  "熱交換器動作設定  切",
                  "HeatExchangerOperationSetting  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "AirCleaner",
          "message0": "空気清浄器 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "AirCleaner",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "風量設定  自動",
                  "AirFlowRateSetting  Automatic"
                ],
                [
                  "空気汚れ検知状態  有",
                  "AirPollutionDetectionStatus  YES"
                ],
                [
                  "空気汚れ検知状態  無",
                  "AirPollutionDetectionStatus  NO"
                ],
                [
                  "煙（たばこ）検知状態  有",
                  "SmokeDetectionStatus  YES"
                ],
                [
                  "煙（たばこ）検知状態  無",
                  "SmokeDetectionStatus  NO"
                ],
                [
                  "光触媒動作設定  入",
                  "OpticalCatalystOperationSetting  ON"
                ],
                [
                  "光触媒動作設定  切",
                  "OpticalCatalystOperationSetting  OFF"
                ],
                [
                  "フィルター交換通知状態  有",
                  "FilterChangeNotice  YES"
                ],
                [
                  "フィルター交換通知状態  無",
                  "FilterChangeNotice  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "Humidifier",
          "message0": "加湿器 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "Humidifier",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "OFFタイマ予約設定  入",
                  "ReservationSetOfOffTimer  ON"
                ],
                [
                  "OFFタイマ予約設定  切",
                  "ReservationSetOfOffTimer  OFF"
                ],
                [
                  "イオン放出設定  入",
                  "IonEmissionSetting  ON"
                ],
                [
                  "イオン放出設定  切",
                  "IonEmissionSetting  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "ElectricHeater",
          "message0": "電気暖房器 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "ElectricHeater",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "ONタイマ予約設定  入",
                  "OnTimerSetting  ON"
                ],
                [
                  "ONタイマ予約設定  切",
                  "OnTimerSetting  OFF"
                ],
                [
                  "OFFタイマ予約設定  入",
                  "OffTimerSetting  ON"
                ],
                [
                  "OFFタイマ予約設定  切",
                  "OffTimerSetting  OFF"
                ],
                [
                  "風量設定  自動",
                  "AirFlowRateSetting  Automatic"
                ],
                [
                  "温度自動設定  入",
                  "AutomaticTemperatureControlSetting  ON"
                ],
                [
                  "温度自動設定  切",
                  "AutomaticTemperatureControlSetting  OFF"
                ],
                [
                  "温度設定値  不明",
                  "SetTemperatureValue  Undefined"
                ]
              ]
            }
          ]
        },
        {
          "type": "FanHeater",
          "message0": "ファンヒータ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "FanHeater",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "ONタイマ予約設定  時刻予約、相対時間予約共に入",
                  "OnTimerSetting  Both the time- and relative time-based reservation functions are ON"
                ],
                [
                  "ONタイマ予約設定  予約切",
                  "OnTimerSetting  Both reservation functions are OFF"
                ],
                [
                  "ONタイマ予約設定  時刻予約のみ入",
                  "OnTimerSetting  Time-based reservation functions is ON"
                ],
                [
                  "ONタイマ予約設定  相対時間予約のみ入",
                  "OnTimerSetting  Relative time-based reservation functions is ON"
                ],
                [
                  "OFFタイマ予約設定  時刻予約、相対時間予約共に入",
                  "OffTimerSetting  Both the time- and relative time-based reservation functions are ON"
                ],
                [
                  "OFFタイマ予約設定  予約切",
                  "OffTimerSetting  Both reservation functions are OFF"
                ],
                [
                  "OFFタイマ予約設定  時刻予約のみ入",
                  "OffTimerSetting  Time-based reservation functions is ON"
                ],
                [
                  "OFFタイマ予約設定  相対時間予約のみ入",
                  "OffTimerSetting  Relative time-based reservation functions is ON"
                ],
                [
                  "温度自動設定  入",
                  "AutomaticTemperatureControlSetting  ON"
                ],
                [
                  "温度自動設定  切",
                  "AutomaticTemperatureControlSetting  OFF"
                ],
                [
                  "温度計測値  不明",
                  "MeasuredTemperature  Undefined"
                ],
                [
                  "延長運転設定  入",
                  "ExtensionalOperationSetting  ON"
                ],
                [
                  "延長運転設定  切",
                  "ExtensionalOperationSetting  OFF"
                ],
                [
                  "イオン放出設定  入",
                  "IonEmissionSetting  ON"
                ],
                [
                  "イオン放出設定  切",
                  "IonEmissionSetting  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "ElectricStorageHeater",
          "message0": "電気蓄熱暖房器 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "ElectricStorageHeater",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "風量設定  OFF",
                  "AirFlowRateSetting  OFF"
                ],
                [
                  "風量設定  弱",
                  "AirFlowRateSetting  Low"
                ],
                [
                  "風量設定  強",
                  "AirFlowRateSetting  High"
                ],
                [
                  "風量設定  自動",
                  "AirFlowRateSetting  Auto"
                ],
                [
                  "ファン動作状態  OFF",
                  "FanOperationStatus  OFF"
                ],
                [
                  "ファン動作状態  弱",
                  "FanOperationStatus  Low"
                ],
                [
                  "ファン動作状態  強",
                  "FanOperationStatus  High"
                ],
                [
                  "蓄熱動作状態  入",
                  "HeatStorageOperationStatus  ON"
                ],
                [
                  "蓄熱動作状態  切",
                  "HeatStorageOperationStatus  OFF"
                ],
                [
                  "昼間蓄熱設定  入",
                  "DaytimeHeatStorageSetting  ON"
                ],
                [
                  "昼間蓄熱設定  切",
                  "DaytimeHeatStorageSetting  OFF"
                ],
                [
                  "昼間蓄熱可否状態  有",
                  "DaytimeHeatStorageAbility  YES"
                ],
                [
                  "昼間蓄熱可否状態  無",
                  "DaytimeHeatStorageAbility  NO"
                ],
                [
                  "放熱方法  ファン有",
                  "RadiationMethod  YES"
                ],
                [
                  "放熱方法  ファン無",
                  "RadiationMethod  NO"
                ],
                [
                  "チャイルドロック設定  有",
                  "ChildLockSetting  YES"
                ],
                [
                  "チャイルドロック設定  無",
                  "ChildLockSetting  NO"
                ],
                [
                  "ファンタイマ1 予約設定  有",
                  "FanTimer1Setting  YES"
                ],
                [
                  "ファンタイマ1 予約設定  無",
                  "FanTimer1Setting  NO"
                ],
                [
                  "ファンタイマ2 予約設定  有",
                  "FanTimer2Setting  YES"
                ],
                [
                  "ファンタイマ2 予約設定  無",
                  "FanTimer2Setting  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "PackageTypeCommercialAirConditioner(indoorUnit)(exceptThoseForFacilities)",
          "message0": "業務用パッケージエアコン室内機（設備用を除く） %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "PackageTypeCommercialAirConditioner(indoorUnit)(exceptThoseForFacilities)",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "サーモ状態  有",
                  "ThermostatState  YES"
                ],
                [
                  "サーモ状態  無",
                  "ThermostatState  NO"
                ],
                [
                  "自動運転時運転モード状態  その他",
                  "CurrentFunction(automaticOperationMode)  Other"
                ],
                [
                  "自動運転時運転モード状態  冷房",
                  "CurrentFunction(automaticOperationMode)  Cooling"
                ],
                [
                  "自動運転時運転モード状態  暖房",
                  "CurrentFunction(automaticOperationMode)  Heating"
                ],
                [
                  "自動運転時運転モード状態  除湿",
                  "CurrentFunction(automaticOperationMode)  Dehumidification"
                ],
                [
                  "自動運転時運転モード状態  送風",
                  "CurrentFunction(automaticOperationMode)  Air circulation"
                ],
                [
                  "運転モード設定  自動",
                  "OperationModeSetting  Automatic"
                ],
                [
                  "運転モード設定  冷房",
                  "OperationModeSetting  Cooling"
                ],
                [
                  "運転モード設定  暖房",
                  "OperationModeSetting  Heating"
                ],
                [
                  "運転モード設定  除湿",
                  "OperationModeSetting  Dehumidification"
                ],
                [
                  "運転モード設定  送風",
                  "OperationModeSetting  Air circulation"
                ],
                [
                  "室内機消費電力範囲  未定",
                  "PowerConsumptionRangeForIndoorUnits  Unknown"
                ],
                [
                  "室内機消費電力範囲  50W未満",
                  "PowerConsumptionRangeForIndoorUnits  Less than 50W"
                ],
                [
                  "室内機消費電力範囲  50W以上〜100W未満",
                  "PowerConsumptionRangeForIndoorUnits  50W-100W"
                ],
                [
                  "室内機消費電力範囲  100W以上〜150W未満",
                  "PowerConsumptionRangeForIndoorUnits  100W-150W"
                ],
                [
                  "室内機消費電力範囲  150W以上〜200W未満",
                  "PowerConsumptionRangeForIndoorUnits  150W-200W"
                ],
                [
                  "室内機消費電力範囲  200W以上",
                  "PowerConsumptionRangeForIndoorUnits  Equal to or more than 200W"
                ]
              ]
            }
          ]
        },
        {
          "type": "PackageTypeCommercialAirConditioner(outdoorUnit)",
          "message0": "業務用パッケージエアコン室外機（設備用を除く） %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "PackageTypeCommercialAirConditioner(outdoorUnit)",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "特殊状態  有",
                  "SpecialState  YES"
                ],
                [
                  "特殊状態  無",
                  "SpecialState  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "GasHeatPumpTypeCommercialAirConditioner(indoorUnit)",
          "message0": "業務用ガスヒートポンプエアコン室内機 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "GasHeatPumpTypeCommercialAirConditioner(indoorUnit)",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "サーモ状態  有",
                  "ThermoStatus  YES"
                ],
                [
                  "サーモ状態  無",
                  "ThermoStatus  NO"
                ],
                [
                  "自動運転時運転モード状態  その他",
                  "OperationModeStatusDuringAutoOperation  Other"
                ],
                [
                  "自動運転時運転モード状態  冷房",
                  "OperationModeStatusDuringAutoOperation  Cooling"
                ],
                [
                  "自動運転時運転モード状態  暖房",
                  "OperationModeStatusDuringAutoOperation  Heating"
                ],
                [
                  "自動運転時運転モード状態  除湿",
                  "OperationModeStatusDuringAutoOperation  Dehumidification"
                ],
                [
                  "自動運転時運転モード状態  送風",
                  "OperationModeStatusDuringAutoOperation  Air circulation"
                ],
                [
                  "運転モード設定  自動",
                  "OperationModeSetting  Automatic"
                ],
                [
                  "運転モード設定  冷房",
                  "OperationModeSetting  Cooling"
                ],
                [
                  "運転モード設定  暖房",
                  "OperationModeSetting  Heating"
                ],
                [
                  "運転モード設定  除湿",
                  "OperationModeSetting  Dehumidification"
                ],
                [
                  "運転モード設定  送風",
                  "OperationModeSetting  Air circulation"
                ],
                [
                  "室内機消費電力範囲  未定",
                  "PowerConsumptionRangeForIndoorUnits  Unknown"
                ],
                [
                  "室内機消費電力範囲  50W未満",
                  "PowerConsumptionRangeForIndoorUnits  Less than 50W"
                ],
                [
                  "室内機消費電力範囲  50W以上〜100W未満",
                  "PowerConsumptionRangeForIndoorUnits  50W-100W"
                ],
                [
                  "室内機消費電力範囲  100W以上〜150W未満",
                  "PowerConsumptionRangeForIndoorUnits  100W-150W"
                ],
                [
                  "室内機消費電力範囲  150W以上〜200W未満",
                  "PowerConsumptionRangeForIndoorUnits  150W-200W"
                ],
                [
                  "室内機消費電力範囲  200W以上",
                  "PowerConsumptionRangeForIndoorUnits  Equal to or more than 200W"
                ]
              ]
            }
          ]
        },
        {
          "type": "GasHeatPumpTypeCommercialAirConditioner(outdoorUnit)",
          "message0": "業務用ガスヒートポンプエアコン室外機 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "GasHeatPumpTypeCommercialAirConditioner(outdoorUnit)",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "RangeHood",
          "message0": "レンジフード %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "RangeHood",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "換気風量設定  自動",
                  "VentilationAirFlowRateSetting  Automatic"
                ],
                [
                  "レンジフード自動設定  有",
                  "RangeHoodAutomaticSetting  YES"
                ],
                [
                  "レンジフード自動設定  無",
                  "RangeHoodAutomaticSetting  NO"
                ],
                [
                  "人体検知状態  有",
                  "HumanDetectionStatus  YES"
                ],
                [
                  "人体検知状態  無",
                  "HumanDetectionStatus  NO"
                ],
                [
                  "ガス検知状態  有",
                  "GasDetectionStatus  YES"
                ],
                [
                  "ガス検知状態  無",
                  "GasDetectionStatus  NO"
                ],
                [
                  "エラー検知モード  モーターエラー状態",
                  "ErrorDetectionMode  Motor Error"
                ],
                [
                  "エラー検知モード  整流板検知状態",
                  "ErrorDetectionMode  Current Plate Detection"
                ],
                [
                  "エラー検知モード  正常状態",
                  "ErrorDetectionMode  Normal"
                ],
                [
                  "エラー検知モード  その他",
                  "ErrorDetectionMode  Other"
                ],
                [
                  "照明動作設定  点灯",
                  "LightingOperationSetting  Lighting"
                ],
                [
                  "照明動作設定  消灯",
                  "LightingOperationSetting  Lights-out"
                ],
                [
                  "照明動作設定  点滅",
                  "LightingOperationSetting  Flicker "
                ],
                [
                  "光源色設定  電球色",
                  "LightSourceColorSetting  Incandescent lamp color"
                ],
                [
                  "光源色設定  白色",
                  "LightSourceColorSetting  White"
                ],
                [
                  "光源色設定  昼白色",
                  "LightSourceColorSetting  Daylight white"
                ],
                [
                  "光源色設定  昼光色",
                  "LightSourceColorSetting  Daylight color"
                ],
                [
                  "光源色設定  その他",
                  "LightSourceColorSetting  Other"
                ],
                [
                  "点灯モード設定  自動",
                  "LightingModeSetting  Automatic"
                ],
                [
                  "点灯モード設定  通常灯",
                  "LightingModeSetting  Normal Lighting"
                ],
                [
                  "点灯モード設定  カラー灯",
                  "LightingModeSetting  Color Lighting"
                ]
              ]
            }
          ]
        },
        {
          "type": "ElectricallyOperatedShade",
          "message0": "電動ブラインド %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "ElectricallyOperatedShade",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "開閉設定  開",
                  "OpenCloseSetting  Open"
                ],
                [
                  "開閉設定  閉",
                  "OpenCloseSetting  Close"
                ],
                [
                  "ブラインド開閉速度設定  低",
                  "BlindOpenCloseSpeedSetting  Low"
                ],
                [
                  "ブラインド開閉速度設定  中",
                  "BlindOpenCloseSpeedSetting  Middle"
                ],
                [
                  "ブラインド開閉速度設定  高",
                  "BlindOpenCloseSpeedSetting  High"
                ]
              ]
            }
          ]
        },
        {
          "type": "ElectricallyOperatedBlindShade",
          "message0": "電動ブラインド・日よけ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "ElectricallyOperatedBlindShade",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "タイマ動作設定  入",
                  "TimerOperationSetting  ON"
                ],
                [
                  "タイマ動作設定  切",
                  "TimerOperationSetting  OFF"
                ],
                [
                  "風検知状態  有",
                  "WindDetectionStatus  YES"
                ],
                [
                  "風検知状態  無",
                  "WindDetectionStatus  NO"
                ],
                [
                  "日差し検知状態  有",
                  "SunlightDetectionStatus  YES"
                ],
                [
                  "日差し検知状態  無",
                  "SunlightDetectionStatus  NO"
                ],
                [
                  "開（張出し）速度設定  低",
                  "Opening(extention)SpeedSetting  Low"
                ],
                [
                  "開（張出し）速度設定  中",
                  "Opening(extention)SpeedSetting  Middle"
                ],
                [
                  "開（張出し）速度設定  高",
                  "Opening(extention)SpeedSetting  High"
                ],
                [
                  "閉（収納）速度設定  低",
                  "Closing(retraction)SpeedSetting  Low"
                ],
                [
                  "閉（収納）速度設定  中",
                  "Closing(retraction)SpeedSetting  Middle"
                ],
                [
                  "閉（収納）速度設定  高",
                  "Closing(retraction)SpeedSetting  High"
                ],
                [
                  "自動動作設定  入",
                  "AutomaticOperationSetting  ON"
                ],
                [
                  "自動動作設定  切",
                  "AutomaticOperationSetting  OFF"
                ],
                [
                  "開閉（張出し／収納）動作設定  開",
                  "OpenClose(extensionRetraction)Setting  Open"
                ],
                [
                  "開閉（張出し／収納）動作設定  閉",
                  "OpenClose(extensionRetraction)Setting  Close"
                ],
                [
                  "開閉（張出し／収納）動作設定  停止",
                  "OpenClose(extensionRetraction)Setting  Stop"
                ],
                [
                  "開閉（張出し／収納）速度設定  低",
                  "OpenClose(extensionRetraction)SpeedSetting  Low"
                ],
                [
                  "開閉（張出し／収納）速度設定  中",
                  "OpenClose(extensionRetraction)SpeedSetting  Middle"
                ],
                [
                  "開閉（張出し／収納）速度設定  高",
                  "OpenClose(extensionRetraction)SpeedSetting  High"
                ],
                [
                  "電気錠設定  施錠",
                  "ElectricLockSetting  Lock"
                ],
                [
                  "電気錠設定  解錠",
                  "ElectricLockSetting  Unlock"
                ],
                [
                  "遠隔操作設定状態  ON（許可）",
                  "RemoteOperationSettingStatus  ON(permitted)"
                ],
                [
                  "遠隔操作設定状態  OFF（禁止）",
                  "RemoteOperationSettingStatus  OFF(prohibited)"
                ],
                [
                  "選択開（張出し）度動作設定  開度レベル設定位置開",
                  "SelectiveOpening(extention)OperationSetting  Degree-of-setting position: Open"
                ],
                [
                  "選択開（張出し）度動作設定  動作時間設定値開",
                  "SelectiveOpening(extention)OperationSetting  Operation time setting value: Open"
                ],
                [
                  "選択開（張出し）度動作設定  動作時間設定値閉",
                  "SelectiveOpening(extention)OperationSetting  Operation time setting value: Close"
                ],
                [
                  "選択開（張出し）度動作設定  ローカル設定位置",
                  "SelectiveOpening(extention)OperationSetting  Local setting position"
                ],
                [
                  "開閉（張出し／収納）状態  全開",
                  "OpenClosed(extensionRetraction)Status  Fully open"
                ],
                [
                  "開閉（張出し／収納）状態  全閉",
                  "OpenClosed(extensionRetraction)Status  Fully closed"
                ],
                [
                  "開閉（張出し／収納）状態  開動作中",
                  "OpenClosed(extensionRetraction)Status  Open"
                ],
                [
                  "開閉（張出し／収納）状態  閉動作中",
                  "OpenClosed(extensionRetraction)Status  Closed"
                ],
                [
                  "開閉（張出し／収納）状態  途中停止",
                  "OpenClosed(extensionRetraction)Status  Stopped halfway"
                ],
                [
                  "ワンタイム開（張出し）速度設定  低",
                  "OneTimeOpening(extension)SpeedSetting  Low"
                ],
                [
                  "ワンタイム開（張出し）速度設定  中",
                  "OneTimeOpening(extension)SpeedSetting  Middle"
                ],
                [
                  "ワンタイム開（張出し）速度設定  高",
                  "OneTimeOpening(extension)SpeedSetting  High"
                ],
                [
                  "ワンタイム開（張出し）速度設定  無し",
                  "OneTimeOpening(extension)SpeedSetting  None"
                ],
                [
                  "ワンタイム閉（収納）速度設定  低",
                  "OneTimeClosing(retraction)SpeedSetting  Low"
                ],
                [
                  "ワンタイム閉（収納）速度設定  中",
                  "OneTimeClosing(retraction)SpeedSetting  Middle"
                ],
                [
                  "ワンタイム閉（収納）速度設定  高",
                  "OneTimeClosing(retraction)SpeedSetting  High"
                ],
                [
                  "ワンタイム閉（収納）速度設定  無し",
                  "OneTimeClosing(retraction)SpeedSetting  None"
                ]
              ]
            }
          ]
        },
        {
          "type": "ElectricallyOperatedShutter",
          "message0": "電動シャッター %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "ElectricallyOperatedShutter",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "タイマ動作設定  入",
                  "TimerOperationSetting  ON"
                ],
                [
                  "タイマ動作設定  切",
                  "TimerOperationSetting  OFF"
                ],
                [
                  "開速度設定  低",
                  "OpeningSpeedSetting  Low"
                ],
                [
                  "開速度設定  中",
                  "OpeningSpeedSetting  Middle"
                ],
                [
                  "開速度設定  高",
                  "OpeningSpeedSetting  High"
                ],
                [
                  "閉速度設定  低",
                  "ClosingSpeedSetting  Low"
                ],
                [
                  "閉速度設定  中",
                  "ClosingSpeedSetting  Middle"
                ],
                [
                  "閉速度設定  高",
                  "ClosingSpeedSetting  High"
                ],
                [
                  "開閉速度設定  低",
                  "OpeningClosingSpeedSetting  Low"
                ],
                [
                  "開閉速度設定  中",
                  "OpeningClosingSpeedSetting  Middle"
                ],
                [
                  "開閉速度設定  高",
                  "OpeningClosingSpeedSetting  High"
                ],
                [
                  "電気錠設定  施錠",
                  "ElectricLockSetting  Lock"
                ],
                [
                  "電気錠設定  解錠",
                  "ElectricLockSetting  Unlock"
                ],
                [
                  "開閉設定2  開",
                  "OpenCloseSetting2  Open"
                ],
                [
                  "開閉設定2  閉",
                  "OpenCloseSetting2  Close"
                ],
                [
                  "遠隔操作設定状態  ON（許可）",
                  "RemoteOperationSettingStatus  ON(permitted)"
                ],
                [
                  "遠隔操作設定状態  OFF（禁止）",
                  "RemoteOperationSettingStatus  OFF(prohibited)"
                ],
                [
                  "選択開度動作設定  開度レベル設定位置開",
                  "SelectiveDegreeOfOpeningSetting  Degree-of-setting position: Open"
                ],
                [
                  "選択開度動作設定  動作時間設定値開",
                  "SelectiveDegreeOfOpeningSetting  Operation time setting value: Open"
                ],
                [
                  "選択開度動作設定  動作時間設定値閉",
                  "SelectiveDegreeOfOpeningSetting  Operation time setting value: Close"
                ],
                [
                  "選択開度動作設定  ローカル設定位置",
                  "SelectiveDegreeOfOpeningSetting  Local setting position"
                ],
                [
                  "選択開度動作設定  スリット開度設定",
                  "SelectiveDegreeOfOpeningSetting  Slit degree-of-opning setting"
                ],
                [
                  "開閉状態  全開",
                  "OpenClosedStatus  Fully open"
                ],
                [
                  "開閉状態  全閉",
                  "OpenClosedStatus  Fully closed"
                ],
                [
                  "開閉状態  開動作中",
                  "OpenClosedStatus  Opening"
                ],
                [
                  "開閉状態  閉動作中",
                  "OpenClosedStatus  Closing"
                ],
                [
                  "開閉状態  途中停止",
                  "OpenClosedStatus  Stopped halfway"
                ],
                [
                  "ワンタイム開速度設定  低",
                  "OneTimeOpeningSpeedSetting  Low"
                ],
                [
                  "ワンタイム開速度設定  中",
                  "OneTimeOpeningSpeedSetting  Middle"
                ],
                [
                  "ワンタイム開速度設定  高",
                  "OneTimeOpeningSpeedSetting  High"
                ],
                [
                  "ワンタイム開速度設定  無し",
                  "OneTimeOpeningSpeedSetting  None"
                ],
                [
                  "ワンタイム閉速度設定  低",
                  "OneTimeClosingSpeedSetting  Low"
                ],
                [
                  "ワンタイム閉速度設定  中",
                  "OneTimeClosingSpeedSetting  Middle"
                ],
                [
                  "ワンタイム閉速度設定  高",
                  "OneTimeClosingSpeedSetting  High"
                ],
                [
                  "ワンタイム閉速度設定  無し",
                  "OneTimeClosingSpeedSetting  None"
                ]
              ]
            }
          ]
        },
        {
          "type": "ElectricallyOperatedRainSlidingDoorShutter",
          "message0": "電動雨戸・シャッター %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "ElectricallyOperatedRainSlidingDoorShutter",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "開閉設定１  開",
                  "OpenCloseSetting1  Open"
                ],
                [
                  "開閉設定１  閉",
                  "OpenCloseSetting1  Close"
                ],
                [
                  "開閉設定１  停止",
                  "OpenCloseSetting1  Stop"
                ],
                [
                  "開閉速度設定  低",
                  "OpeningClosingSpeedSetting  Low"
                ],
                [
                  "開閉速度設定  中",
                  "OpeningClosingSpeedSetting  Middle"
                ],
                [
                  "開閉速度設定  高",
                  "OpeningClosingSpeedSetting  High"
                ],
                [
                  "電気錠設定  施錠",
                  "ElectricLockSetting  Lock"
                ],
                [
                  "電気錠設定  解錠",
                  "ElectricLockSetting  Unlock"
                ],
                [
                  "開閉設定2  開",
                  "OpenCloseSetting2  Open"
                ],
                [
                  "開閉設定2  閉",
                  "OpenCloseSetting2  Close"
                ]
              ]
            }
          ]
        },
        {
          "type": "ElectricallyOperatedRainSlidingDoorShutter",
          "message0": "電動雨戸・シャッター %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "ElectricallyOperatedRainSlidingDoorShutter",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "タイマ動作設定  入",
                  "TimerOperationSetting  ON"
                ],
                [
                  "タイマ動作設定  切",
                  "TimerOperationSetting  OFF"
                ],
                [
                  "開速度設定  低",
                  "OpeningSpeedSetting  Low"
                ],
                [
                  "開速度設定  中",
                  "OpeningSpeedSetting  Middle"
                ],
                [
                  "開速度設定  高",
                  "OpeningSpeedSetting  High"
                ],
                [
                  "閉速度設定  低",
                  "ClosingSpeedSetting  Low"
                ],
                [
                  "閉速度設定  中",
                  "ClosingSpeedSetting  Middle"
                ],
                [
                  "閉速度設定  高",
                  "ClosingSpeedSetting  High"
                ],
                [
                  "開閉動作設定  開",
                  "OpenCloseSetting  Open"
                ],
                [
                  "開閉動作設定  閉",
                  "OpenCloseSetting  Close"
                ],
                [
                  "開閉動作設定  停止",
                  "OpenCloseSetting  Stop"
                ],
                [
                  "開閉速度設定  低",
                  "OpeningClosingSpeedSetting  Low"
                ],
                [
                  "開閉速度設定  中",
                  "OpeningClosingSpeedSetting  Middle"
                ],
                [
                  "開閉速度設定  高",
                  "OpeningClosingSpeedSetting  High"
                ],
                [
                  "電気錠設定  施錠",
                  "ElectricLockSetting  Lock"
                ],
                [
                  "電気錠設定  解錠",
                  "ElectricLockSetting  Unlock"
                ],
                [
                  "遠隔操作設定状態  ON（許可）",
                  "RemoteOperationSettingStatus  ON(permitted)"
                ],
                [
                  "遠隔操作設定状態  OFF（禁止）",
                  "RemoteOperationSettingStatus  OFF(prohibited)"
                ],
                [
                  "選択開度動作設定  開度レベル設定位置開",
                  "SelectiveDegreeOfOpeningSetting  Degree-of-setting position: Open"
                ],
                [
                  "選択開度動作設定  動作時間設定値開",
                  "SelectiveDegreeOfOpeningSetting  Operation time setting value: Open"
                ],
                [
                  "選択開度動作設定  動作時間設定値閉",
                  "SelectiveDegreeOfOpeningSetting  Operation time setting value: Close"
                ],
                [
                  "選択開度動作設定  ローカル設定位置",
                  "SelectiveDegreeOfOpeningSetting  Local setting position"
                ],
                [
                  "選択開度動作設定  スリット開度設定",
                  "SelectiveDegreeOfOpeningSetting  Slit degree-of-opning setting"
                ],
                [
                  "開閉状態  全開",
                  "OpenClosedStatus  Fully open"
                ],
                [
                  "開閉状態  全閉",
                  "OpenClosedStatus  Fully closed"
                ],
                [
                  "開閉状態  開動作中",
                  "OpenClosedStatus  Opening"
                ],
                [
                  "開閉状態  閉動作中",
                  "OpenClosedStatus  Closing"
                ],
                [
                  "開閉状態  途中停止",
                  "OpenClosedStatus  Stopped halfway"
                ],
                [
                  "ワンタイム開速度設定  低",
                  "OneTimeOpeningSpeedSetting  Low"
                ],
                [
                  "ワンタイム開速度設定  中",
                  "OneTimeOpeningSpeedSetting  Middle"
                ],
                [
                  "ワンタイム開速度設定  高",
                  "OneTimeOpeningSpeedSetting  High"
                ],
                [
                  "ワンタイム開速度設定  無し",
                  "OneTimeOpeningSpeedSetting  None"
                ],
                [
                  "ワンタイム閉速度設定  低",
                  "OneTimeClosingSpeedSetting  Low"
                ],
                [
                  "ワンタイム閉速度設定  中",
                  "OneTimeClosingSpeedSetting  Middle"
                ],
                [
                  "ワンタイム閉速度設定  高",
                  "OneTimeClosingSpeedSetting  High"
                ],
                [
                  "ワンタイム閉速度設定  無し",
                  "OneTimeClosingSpeedSetting  None"
                ]
              ]
            }
          ]
        },
        {
          "type": "ElectricallyOperatedGate",
          "message0": "電動ゲート %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "ElectricallyOperatedGate",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "開速度設定  低",
                  "OpeningSpeedSetting  Low"
                ],
                [
                  "開速度設定  中",
                  "OpeningSpeedSetting  Middle"
                ],
                [
                  "開速度設定  高",
                  "OpeningSpeedSetting  High"
                ],
                [
                  "閉速度設定  低",
                  "ClosingSpeedSetting  Low"
                ],
                [
                  "閉速度設定  中",
                  "ClosingSpeedSetting  Middle"
                ],
                [
                  "閉速度設定  高",
                  "ClosingSpeedSetting  High"
                ],
                [
                  "開閉動作設定  開",
                  "OpenCloseSetting  Open"
                ],
                [
                  "開閉動作設定  閉",
                  "OpenCloseSetting  Close"
                ],
                [
                  "開閉動作設定  停止",
                  "OpenCloseSetting  Stop"
                ],
                [
                  "開閉速度設定  低",
                  "OpeningClosingSpeedSetting  Low"
                ],
                [
                  "開閉速度設定  中",
                  "OpeningClosingSpeedSetting  Middle"
                ],
                [
                  "開閉速度設定  高",
                  "OpeningClosingSpeedSetting  High"
                ],
                [
                  "電気錠設定  施錠",
                  "ElectricLockSetting  Lock"
                ],
                [
                  "電気錠設定  解錠",
                  "ElectricLockSetting  Unlock"
                ],
                [
                  "遠隔操作設定状態  ON（許可）",
                  "RemoteOperationSettingStatus  ON(permitted)"
                ],
                [
                  "遠隔操作設定状態  OFF（禁止）",
                  "RemoteOperationSettingStatus  OFF(prohibited)"
                ],
                [
                  "選択開度動作設定  開度レベル設定位置開",
                  "SelectiveDegreeOfOpeningSetting  Degree-of-setting position: Open"
                ],
                [
                  "選択開度動作設定  動作時間設定値開",
                  "SelectiveDegreeOfOpeningSetting  Operation time setting value: Open"
                ],
                [
                  "選択開度動作設定  動作時間設定値閉",
                  "SelectiveDegreeOfOpeningSetting  Operation time setting value: Close"
                ],
                [
                  "選択開度動作設定  ローカル設定位置",
                  "SelectiveDegreeOfOpeningSetting  Local setting position"
                ],
                [
                  "開閉状態  全開",
                  "OpenClosedStatus  Fully open"
                ],
                [
                  "開閉状態  全閉",
                  "OpenClosedStatus  Fully closed"
                ],
                [
                  "開閉状態  開動作中",
                  "OpenClosedStatus  Opening"
                ],
                [
                  "開閉状態  閉動作中",
                  "OpenClosedStatus  Closing"
                ],
                [
                  "開閉状態  途中停止",
                  "OpenClosedStatus  Stopped halfway"
                ],
                [
                  "ワンタイム開速度設定  低",
                  "OneTimeOpeningSpeedSetting  Low"
                ],
                [
                  "ワンタイム開速度設定  中",
                  "OneTimeOpeningSpeedSetting  Middle"
                ],
                [
                  "ワンタイム開速度設定  高",
                  "OneTimeOpeningSpeedSetting  High"
                ],
                [
                  "ワンタイム開速度設定  無し",
                  "OneTimeOpeningSpeedSetting  None"
                ],
                [
                  "ワンタイム閉速度設定  低",
                  "OneTimeClosingSpeedSetting  Low"
                ],
                [
                  "ワンタイム閉速度設定  中",
                  "OneTimeClosingSpeedSetting  Middle"
                ],
                [
                  "ワンタイム閉速度設定  高",
                  "OneTimeClosingSpeedSetting  High"
                ],
                [
                  "ワンタイム閉速度設定  無し",
                  "OneTimeClosingSpeedSetting  None"
                ]
              ]
            }
          ]
        },
        {
          "type": "ElectricallyOperatedWindow",
          "message0": "電動窓 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "ElectricallyOperatedWindow",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "タイマ動作設定  入",
                  "TimerOperationSetting  ON"
                ],
                [
                  "タイマ動作設定  切",
                  "TimerOperationSetting  OFF"
                ],
                [
                  "登録温度検知状態  有",
                  "RegisteredTemperatureDetectionStatus  YES"
                ],
                [
                  "登録温度検知状態  無",
                  "RegisteredTemperatureDetectionStatus  NO"
                ],
                [
                  "雨検知状態  有",
                  "RainDetectionStatus  YES"
                ],
                [
                  "雨検知状態  無",
                  "RainDetectionStatus  NO"
                ],
                [
                  "開速度設定  低",
                  "OpeningSpeedSetting  Low"
                ],
                [
                  "開速度設定  中",
                  "OpeningSpeedSetting  Middle"
                ],
                [
                  "開速度設定  高",
                  "OpeningSpeedSetting  High"
                ],
                [
                  "閉速度設定  低",
                  "ClosingSpeedSetting  Low"
                ],
                [
                  "閉速度設定  中",
                  "ClosingSpeedSetting  Middle"
                ],
                [
                  "閉速度設定  高",
                  "ClosingSpeedSetting  High"
                ],
                [
                  "自動動作設定  入",
                  "AutomaticOperationSetting  ON"
                ],
                [
                  "自動動作設定  切",
                  "AutomaticOperationSetting  OFF"
                ],
                [
                  "開閉動作設定  開",
                  "OpenCloseSetting  Open"
                ],
                [
                  "開閉動作設定  閉",
                  "OpenCloseSetting  Close"
                ],
                [
                  "開閉動作設定  停止",
                  "OpenCloseSetting  Stop"
                ],
                [
                  "開閉速度設定  低",
                  "OpeningClosingSpeedSetting  Low"
                ],
                [
                  "開閉速度設定  中",
                  "OpeningClosingSpeedSetting  Middle"
                ],
                [
                  "開閉速度設定  高",
                  "OpeningClosingSpeedSetting  High"
                ],
                [
                  "電気錠設定  施錠",
                  "ElectricLockSetting  Lock"
                ],
                [
                  "電気錠設定  解錠",
                  "ElectricLockSetting  Unlock"
                ],
                [
                  "遠隔操作設定状態  ON（許可）",
                  "RemoteOperationSettingStatus  ON(permitted)"
                ],
                [
                  "遠隔操作設定状態  OFF（禁止）",
                  "RemoteOperationSettingStatus  OFF(prohibited)"
                ],
                [
                  "選択開度動作設定  開度レベル設定位置開",
                  "SelectiveDegreeOfOpeningSetting  Degree-of-setting position: Open"
                ],
                [
                  "選択開度動作設定  動作時間設定値開",
                  "SelectiveDegreeOfOpeningSetting  Operation time setting value: Open"
                ],
                [
                  "選択開度動作設定  動作時間設定値閉",
                  "SelectiveDegreeOfOpeningSetting  Operation time setting value: Close"
                ],
                [
                  "選択開度動作設定  ローカル設定位置",
                  "SelectiveDegreeOfOpeningSetting  Local setting position"
                ],
                [
                  "開閉状態  全開",
                  "OpenClosedStatus  Fully open"
                ],
                [
                  "開閉状態  全閉",
                  "OpenClosedStatus  Fully closed"
                ],
                [
                  "開閉状態  開動作中",
                  "OpenClosedStatus  Opening"
                ],
                [
                  "開閉状態  閉動作中",
                  "OpenClosedStatus  Closing"
                ],
                [
                  "開閉状態  途中停止",
                  "OpenClosedStatus  Stopped halfway"
                ],
                [
                  "ワンタイム開速度設定  低",
                  "OneTimeOpeningSpeedSetting  Low"
                ],
                [
                  "ワンタイム開速度設定  中",
                  "OneTimeOpeningSpeedSetting  Middle"
                ],
                [
                  "ワンタイム開速度設定  高",
                  "OneTimeOpeningSpeedSetting  High"
                ],
                [
                  "ワンタイム開速度設定  無し",
                  "OneTimeOpeningSpeedSetting  None"
                ],
                [
                  "ワンタイム閉速度設定  低",
                  "OneTimeClosingSpeedSetting  Low"
                ],
                [
                  "ワンタイム閉速度設定  中",
                  "OneTimeClosingSpeedSetting  Middle"
                ],
                [
                  "ワンタイム閉速度設定  高",
                  "OneTimeClosingSpeedSetting  High"
                ],
                [
                  "ワンタイム閉速度設定  無し",
                  "OneTimeClosingSpeedSetting  None"
                ]
              ]
            }
          ]
        },
        {
          "type": "AutomaticallyOperatedEntranceDoorSlidingDoor",
          "message0": "電動玄関ドア・引戸 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "AutomaticallyOperatedEntranceDoorSlidingDoor",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "開速度設定  低",
                  "OpeningSpeedSetting  Low"
                ],
                [
                  "開速度設定  中",
                  "OpeningSpeedSetting  Middle"
                ],
                [
                  "開速度設定  高",
                  "OpeningSpeedSetting  High"
                ],
                [
                  "閉速度設定  低",
                  "ClosingSpeedSetting  Low"
                ],
                [
                  "閉速度設定  中",
                  "ClosingSpeedSetting  Middle"
                ],
                [
                  "閉速度設定  高",
                  "ClosingSpeedSetting  High"
                ],
                [
                  "開閉動作設定  開",
                  "OpenCloseSetting  Open"
                ],
                [
                  "開閉動作設定  閉",
                  "OpenCloseSetting  Close"
                ],
                [
                  "開閉動作設定  停止",
                  "OpenCloseSetting  Stop"
                ],
                [
                  "開閉速度設定  低",
                  "OpeningClosingSpeedSetting  Low"
                ],
                [
                  "開閉速度設定  中",
                  "OpeningClosingSpeedSetting  Middle"
                ],
                [
                  "開閉速度設定  高",
                  "OpeningClosingSpeedSetting  High"
                ],
                [
                  "遠隔操作設定状態  ON（許可）",
                  "RemoteOperationSettingStatus  ON(permitted)"
                ],
                [
                  "遠隔操作設定状態  OFF（禁止）",
                  "RemoteOperationSettingStatus  OFF(prohibited)"
                ],
                [
                  "選択開度動作設定  開度レベル設定位置開",
                  "SelectiveDegreeOfOpeningSetting  Degree-of-setting position: Open"
                ],
                [
                  "選択開度動作設定  動作時間設定値開",
                  "SelectiveDegreeOfOpeningSetting  Operation time setting value: Open"
                ],
                [
                  "選択開度動作設定  動作時間設定値閉",
                  "SelectiveDegreeOfOpeningSetting  Operation time setting value: Close"
                ],
                [
                  "選択開度動作設定  ローカル設定位置",
                  "SelectiveDegreeOfOpeningSetting  Local setting position"
                ],
                [
                  "開閉状態  全開",
                  "OpenClosedStatus  Fully open"
                ],
                [
                  "開閉状態  全閉",
                  "OpenClosedStatus  Fully closed"
                ],
                [
                  "開閉状態  開動作中",
                  "OpenClosedStatus  Opening"
                ],
                [
                  "開閉状態  閉動作中",
                  "OpenClosedStatus  Closing"
                ],
                [
                  "開閉状態  途中停止",
                  "OpenClosedStatus  Stopped halfway"
                ],
                [
                  "ワンタイム開速度設定  低",
                  "OneTimeOpeningSpeedSetting  Low"
                ],
                [
                  "ワンタイム開速度設定  中",
                  "OneTimeOpeningSpeedSetting  Middle"
                ],
                [
                  "ワンタイム開速度設定  高",
                  "OneTimeOpeningSpeedSetting  High"
                ],
                [
                  "ワンタイム開速度設定  無し",
                  "OneTimeOpeningSpeedSetting  None"
                ],
                [
                  "ワンタイム閉速度設定  低",
                  "OneTimeClosingSpeedSetting  Low"
                ],
                [
                  "ワンタイム閉速度設定  中",
                  "OneTimeClosingSpeedSetting  Middle"
                ],
                [
                  "ワンタイム閉速度設定  高",
                  "OneTimeClosingSpeedSetting  High"
                ],
                [
                  "ワンタイム閉速度設定  無し",
                  "OneTimeClosingSpeedSetting  None"
                ]
              ]
            }
          ]
        },
        {
          "type": "GardenSprinkler",
          "message0": "散水器（庭用） %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "GardenSprinkler",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "散水弁開閉設定  自動 ON",
                  "SprinkleValveOpenCloseSetting  automatic ON"
                ],
                [
                  "散水弁開閉設定  手動 ON",
                  "SprinkleValveOpenCloseSetting  manual ON"
                ],
                [
                  "散水弁開閉設定  手動 OFF",
                  "SprinkleValveOpenCloseSetting  manual OFF"
                ],
                [
                  "水やり間隔設定  切",
                  "SprinkleIntervalSetting  OFF"
                ],
                [
                  "水やり間隔設定  毎日",
                  "SprinkleIntervalSetting  daily"
                ],
                [
                  "水やり間隔設定  1日おき",
                  "SprinkleIntervalSetting  every other day"
                ],
                [
                  "水やり間隔設定  2日おき",
                  "SprinkleIntervalSetting  every 3 days"
                ],
                [
                  "水やり間隔設定  週１回",
                  "SprinkleIntervalSetting  once a week"
                ],
                [
                  "水やり回数設定  １番目 ON",
                  "NumberOfSprinklesSetting  first ON"
                ],
                [
                  "水やり回数設定  ２番目 ON",
                  "NumberOfSprinklesSetting  second ON"
                ],
                [
                  "水やり回数設定  両方 ON",
                  "NumberOfSprinklesSetting  both ON"
                ]
              ]
            }
          ]
        },
        {
          "type": "ElectricWaterHeater",
          "message0": "電気温水器 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "ElectricWaterHeater",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "ONタイマ予約設定  入",
                  "OnTimerSetting  ON"
                ],
                [
                  "ONタイマ予約設定  切",
                  "OnTimerSetting  OFF"
                ],
                [
                  "沸き上げ湯温自動設定  入",
                  "AutomaticWaterTemperatureControlSetting  ON"
                ],
                [
                  "沸き上げ湯温自動設定  切",
                  "AutomaticWaterTemperatureControlSetting  OFF"
                ],
                [
                  "沸き上げ湯温設定値  不明",
                  "WaterHeatingTemperatureSetting  Undefined"
                ],
                [
                  "タンク運転モード設定  標準",
                  "TankOperationModeSetting  Standard"
                ],
                [
                  "タンク運転モード設定  節約",
                  "TankOperationModeSetting  Saving"
                ],
                [
                  "タンク運転モード設定  多め",
                  "TankOperationModeSetting  Extra"
                ],
                [
                  "給湯中状態  有",
                  "HotWaterSupplyStatus  YES"
                ],
                [
                  "給湯中状態  無",
                  "HotWaterSupplyStatus  NO"
                ],
                [
                  "エネルギーシフト参加状態  参加",
                  "ParticipationInEnergyShift  Participation"
                ],
                [
                  "エネルギーシフト参加状態  不参加",
                  "ParticipationInEnergyShift  Non Participation"
                ],
                [
                  "ミュート設定  入",
                  "MuteSetting  ON"
                ],
                [
                  "ミュート設定  切",
                  "MuteSetting  OFF"
                ],
                [
                  "風呂自動モード設定  入",
                  "AutomaticBathWaterHeatingModeSetting  ON"
                ],
                [
                  "風呂自動モード設定  切",
                  "AutomaticBathWaterHeatingModeSetting  OFF"
                ],
                [
                  "手動風呂追い焚き動作設定  入",
                  "ManualBathReheatingOperationSetting  ON"
                ],
                [
                  "手動風呂追い焚き動作設定  切",
                  "ManualBathReheatingOperationSetting  OFF"
                ],
                [
                  "浴室優先設定  入",
                  "BathroomPriporitySetting  ON"
                ],
                [
                  "浴室優先設定  切",
                  "BathroomPriporitySetting  OFF"
                ],
                [
                  "風呂動作状態監視  湯張り中",
                  "BathOperationStatusMonitor  Running Hot Water"
                ],
                [
                  "風呂動作状態監視  停止中",
                  "BathOperationStatusMonitor  No Operation"
                ],
                [
                  "風呂動作状態監視  保温中",
                  "BathOperationStatusMonitor  Keeping Temperature"
                ]
              ]
            }
          ]
        },
        {
          "type": "BidetQuippedToilet(withElectricallyWarmedSeat)",
          "message0": "電気便座 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "BidetQuippedToilet(withElectricallyWarmedSeat)",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "便座ヒータ設定  入",
                  "HeaterSettingOfToiletSeat  ON"
                ],
                [
                  "便座ヒータ設定  切",
                  "HeaterSettingOfToiletSeat  OFF"
                ],
                [
                  "便座ヒータ一時停止設定  連続",
                  "TemporalHaltSettingOfToiletSeat  Continuous"
                ],
                [
                  "便座ヒータ一時停止設定  一回",
                  "TemporalHaltSettingOfToiletSeat  Once"
                ],
                [
                  "便座ヒータ一時停止設定  設定無し",
                  "TemporalHaltSettingOfToiletSeat  No setting"
                ],
                [
                  "部屋暖房温度レベル設定  低",
                  "TemperatureLevelSettingOfRoomHeating  Low"
                ],
                [
                  "部屋暖房温度レベル設定  中",
                  "TemperatureLevelSettingOfRoomHeating  Medium"
                ],
                [
                  "部屋暖房温度レベル設定  高",
                  "TemperatureLevelSettingOfRoomHeating  High"
                ],
                [
                  "部屋暖房設定  ON",
                  "RoomHeatingSetting  ON"
                ],
                [
                  "部屋暖房設定  OFF",
                  "RoomHeatingSetting  OFF"
                ],
                [
                  "部屋暖房設定  Timer mode",
                  "RoomHeatingSetting  Timer mode"
                ],
                [
                  "部屋暖房状態  有",
                  "RoomHeatingStatus  YES"
                ],
                [
                  "部屋暖房状態  無",
                  "RoomHeatingStatus  NO"
                ],
                [
                  "特別運転モード設定  設定無し",
                  "SpecialOperationModeSetting  No setting"
                ],
                [
                  "特別運転モード設定  冷え込み防止",
                  "SpecialOperationModeSetting  Over-cool prevention"
                ],
                [
                  "人体検知状態  有",
                  "HumanDetectionStatus  YES"
                ],
                [
                  "人体検知状態  無",
                  "HumanDetectionStatus  NO"
                ],
                [
                  "着座検知状態  有",
                  "SeatingDetectionStatus  YES"
                ],
                [
                  "着座検知状態  無",
                  "SeatingDetectionStatus  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "ElectricKey",
          "message0": "電気錠 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "ElectricKey",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "施錠設定1  施錠",
                  "LockSetting1  Lock"
                ],
                [
                  "施錠設定1  解錠",
                  "LockSetting1  Unlock"
                ],
                [
                  "施錠設定2  施錠",
                  "LockSetting2  Lock"
                ],
                [
                  "施錠設定2  解錠",
                  "LockSetting2  Unlock"
                ],
                [
                  "ドアガード施錠状態  施錠",
                  "LockStatusOfDoorGuard  Lock"
                ],
                [
                  "ドアガード施錠状態  解錠",
                  "LockStatusOfDoorGuard  Unlock"
                ],
                [
                  "扉開閉状態  開",
                  "DoorOpenCloseStatus  Open"
                ],
                [
                  "扉開閉状態  閉",
                  "DoorOpenCloseStatus  Close"
                ],
                [
                  "在室・不在状態  在室",
                  "OccupantNonOccupantStatus  occupant"
                ],
                [
                  "在室・不在状態  不在",
                  "OccupantNonOccupantStatus  non-occupant"
                ],
                [
                  "警報状態  通常状態（警報なし）",
                  "AlarmStatus  Normal(no alarm)"
                ],
                [
                  "警報状態  こじ開け",
                  "AlarmStatus  break open"
                ],
                [
                  "警報状態  扉解放",
                  "AlarmStatus  door open"
                ],
                [
                  "警報状態  手動解錠",
                  "AlarmStatus  manual unlocked"
                ],
                [
                  "警報状態  タンパ",
                  "AlarmStatus  tampered"
                ],
                [
                  "自動施錠モード設定  入",
                  "AutoLockModeSetting  ON"
                ],
                [
                  "自動施錠モード設定  切",
                  "AutoLockModeSetting  OFF"
                ],
                [
                  "電池残量状態  通常",
                  "BatteryLevel  Ordinary level"
                ],
                [
                  "電池残量状態  交換通知有",
                  "BatteryLevel  Notification of battery replacement"
                ]
              ]
            }
          ]
        },
        {
          "type": "InstantaneousWaterHeater",
          "message0": "瞬間式給湯器 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "InstantaneousWaterHeater",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "ONタイマ予約設定  入",
                  "OnTimerSetting  ON"
                ],
                [
                  "ONタイマ予約設定  切",
                  "OnTimerSetting  OFF"
                ],
                [
                  "給湯器燃焼状態  有",
                  "HotWaterHeatingStatus  YES"
                ],
                [
                  "給湯器燃焼状態  無",
                  "HotWaterHeatingStatus  NO"
                ],
                [
                  "給湯保温設定  入",
                  "HotWaterWarmerSetting  ON"
                ],
                [
                  "給湯保温設定  切",
                  "HotWaterWarmerSetting  OFF"
                ],
                [
                  "ミュート設定  入",
                  "MuteSetting  ON"
                ],
                [
                  "ミュート設定  切",
                  "MuteSetting  OFF"
                ],
                [
                  "風呂給湯器燃焼状態  有",
                  "BathWaterHeaterStatus  YES"
                ],
                [
                  "風呂給湯器燃焼状態  無",
                  "BathWaterHeaterStatus  NO"
                ],
                [
                  "風呂自動モード設定  入",
                  "BathAutoModeSetting  ON"
                ],
                [
                  "風呂自動モード設定  切",
                  "BathAutoModeSetting  OFF"
                ],
                [
                  "風呂追い炊き動作設定  入",
                  "BathAdditionalBoilUpOperationSetting  ON"
                ],
                [
                  "風呂追い炊き動作設定  切",
                  "BathAdditionalBoilUpOperationSetting  OFF"
                ],
                [
                  "風呂足し湯動作設定  入",
                  "BathHotWaterAddingOperationSetting  ON"
                ],
                [
                  "風呂足し湯動作設定  切",
                  "BathHotWaterAddingOperationSetting  OFF"
                ],
                [
                  "風呂ぬるめ動作設定  入",
                  "BathWaterTemperatureLoweringOperationSetting  ON"
                ],
                [
                  "風呂ぬるめ動作設定  切",
                  "BathWaterTemperatureLoweringOperationSetting  OFF"
                ],
                [
                  "シャワー給湯状態  有",
                  "ShowerHotWaterSupplyStatus  YES"
                ],
                [
                  "シャワー給湯状態  無",
                  "ShowerHotWaterSupplyStatus  NO"
                ],
                [
                  "台所給湯状態  有",
                  "KitchenHotWaterSupplyStatus  YES"
                ],
                [
                  "台所給湯状態  無",
                  "KitchenHotWaterSupplyStatus  NO"
                ],
                [
                  "給湯保温ONタイマ予約設定  入",
                  "HotWaterWarmerOnTimerReservationSetting  ON"
                ],
                [
                  "給湯保温ONタイマ予約設定  切",
                  "HotWaterWarmerOnTimerReservationSetting  OFF"
                ],
                [
                  "風呂動作状態監視  湯張り中",
                  "BathOperationStatusMonitor  Running Hot Water"
                ],
                [
                  "風呂動作状態監視  停止中",
                  "BathOperationStatusMonitor  No Operation"
                ],
                [
                  "風呂動作状態監視  保温中",
                  "BathOperationStatusMonitor  Keeping Temperature"
                ]
              ]
            }
          ]
        },
        {
          "type": "BathroomHeaterAndDryer",
          "message0": "浴室暖房乾燥機 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "BathroomHeaterAndDryer",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "ONタイマ予約設定１  入",
                  "OnTimerSetting1  ON"
                ],
                [
                  "ONタイマ予約設定１  切",
                  "OnTimerSetting1  OFF"
                ],
                [
                  "OFFタイマ予約設定  入",
                  "OffTimerSetting  ON"
                ],
                [
                  "OFFタイマ予約設定  切",
                  "OffTimerSetting  OFF"
                ],
                [
                  "換気運転設定  自動",
                  "VentilationOperationSetting  Automatic"
                ],
                [
                  "換気運転設定  標準",
                  "VentilationOperationSetting  Standard"
                ],
                [
                  "入浴中暖房運転設定  自動",
                  "BathroomHeaterOperationSetting  Automatic"
                ],
                [
                  "入浴中暖房運転設定  標準",
                  "BathroomHeaterOperationSetting  Standard"
                ],
                [
                  "乾燥運転設定  自動",
                  "BathroomDryerOperationSetting  Automatic"
                ],
                [
                  "乾燥運転設定  標準",
                  "BathroomDryerOperationSetting  Standard"
                ],
                [
                  "涼風運転設定  自動",
                  "CoolAirCirculatorOperationSetting  Automatic"
                ],
                [
                  "涼風運転設定  標準",
                  "CoolAirCirculatorOperationSetting  Standard"
                ],
                [
                  "ミストサウナ運転設定  自動",
                  "MistSaunaOperationSetting  Automatic"
                ],
                [
                  "ミストサウナ運転設定  標準",
                  "MistSaunaOperationSetting  Standard"
                ],
                [
                  "水ミスト運転設定  自動",
                  "WaterMistOperationSetting  Automatic"
                ],
                [
                  "水ミスト運転設定  標準",
                  "WaterMistOperationSetting  Standard"
                ],
                [
                  "換気風量設定  自動",
                  "VentilationAirFlowRateSetting  Automatic"
                ],
                [
                  "フィルタサイン設定  点灯",
                  "FilterCleaningReminderSignSetting  Lit"
                ],
                [
                  "フィルタサイン設定  消灯",
                  "FilterCleaningReminderSignSetting  Not Lit"
                ],
                [
                  "人体検知状態  有",
                  "HumanBodyDetectionStatus  YES"
                ],
                [
                  "人体検知状態  無",
                  "HumanBodyDetectionStatus  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "HouseholdSolarPowerGeneration",
          "message0": "住宅用太陽光発電 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "HouseholdSolarPowerGeneration",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "余剰買取制御機能設定  入",
                  "FunctionToControlPurchaseSurplusElectricitySetting  ON"
                ],
                [
                  "余剰買取制御機能設定  切",
                  "FunctionToControlPurchaseSurplusElectricitySetting  OFF"
                ],
                [
                  "余剰買取制御機能タイプ  有効",
                  "FunctionToControlTheTypeOfSurplusElectricityPurchase  Valid"
                ],
                [
                  "余剰買取制御機能タイプ  無効",
                  "FunctionToControlTheTypeOfSurplusElectricityPurchase  Invalid"
                ],
                [
                  "FIT契約タイプ  FIT",
                  "FitContractType  FIT"
                ],
                [
                  "FIT契約タイプ  非FIT",
                  "FitContractType  Non-FIT"
                ],
                [
                  "FIT契約タイプ  未設定",
                  "FitContractType  No setting"
                ],
                [
                  "自家消費タイプ  自家消費有",
                  "SelfConsumptionType  With self-consumption"
                ],
                [
                  "自家消費タイプ  自家消費無",
                  "SelfConsumptionType  Without self-consumption"
                ],
                [
                  "自家消費タイプ  不明",
                  "SelfConsumptionType  Unknown"
                ],
                [
                  "出力抑制状態  抑制中（出力制御）",
                  "OutputPowerRestraintStatus  Ongoing restraint (output power control)"
                ],
                [
                  "出力抑制状態  抑制中（出力制御以外）",
                  "OutputPowerRestraintStatus  Ongoing restraint (except output power control)"
                ],
                [
                  "出力抑制状態  抑制中（抑制要因不明）",
                  "OutputPowerRestraintStatus  Ongoing restraint (reason for restraint is unknown)"
                ],
                [
                  "出力抑制状態  抑制未実施",
                  "OutputPowerRestraintStatus  Not restraining"
                ],
                [
                  "出力抑制状態  不明",
                  "OutputPowerRestraintStatus  Unknown"
                ],
                [
                  "積算発電電力量リセット設定  リセット",
                  "ResettingCumulativeAmountOfElectricEnergyGenerated  Reset"
                ],
                [
                  "積算売電電力量リセット設定  リセット",
                  "ResettingCumulativeAmountOfElectricEnergySold  Reset"
                ]
              ]
            }
          ]
        },
        {
          "type": "HotWaterHeatSourceEquipment",
          "message0": "冷温水熱源機 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "HotWaterHeatSourceEquipment",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "ONタイマ予約設定  入",
                  "OnTimerSetting  ON"
                ],
                [
                  "ONタイマ予約設定  切",
                  "OnTimerSetting  OFF"
                ],
                [
                  "OFFタイマ予約設定  入",
                  "OffTimerSetting  ON"
                ],
                [
                  "OFFタイマ予約設定  切",
                  "OffTimerSetting  OFF"
                ],
                [
                  "運転モード設定  暖房",
                  "OperationModeSetting  Heating"
                ],
                [
                  "運転モード設定  冷房",
                  "OperationModeSetting  Cooling"
                ],
                [
                  "水温設定1  自動",
                  "WaterTemperature1  Automatic"
                ],
                [
                  "水温設定2  自動",
                  "WaterTemperature2  Automatic"
                ],
                [
                  "往き水温計測値（出口水温）  不明",
                  "MeasuredTemperatureOfOutwardWater(exitWaterTemperature)  Undefined"
                ],
                [
                  "戻り水温計測値（入口水温）  不明",
                  "MeasuredTemperatureOfInwardWater(entranceWaterTemperature)  Undefined"
                ],
                [
                  "特殊運転設定  通常",
                  "SpecialOperationSetting  Normal"
                ],
                [
                  "特殊運転設定  控えめ",
                  "SpecialOperationSetting  Modest"
                ],
                [
                  "特殊運転設定  ハイパワー",
                  "SpecialOperationSetting  High power"
                ],
                [
                  "デイリータイマー設定  タイマー切",
                  "DailyTimerSetting  Timer OFF"
                ],
                [
                  "デイリータイマー設定  タイマー１",
                  "DailyTimerSetting  timer 1"
                ],
                [
                  "デイリータイマー設定  タイマー２",
                  "DailyTimerSetting  timer 2"
                ],
                [
                  "消費電力計測方法  ノード単位",
                  "PowerConsumptionMeasurementMethod  Node unit"
                ],
                [
                  "消費電力計測方法  クラス単位",
                  "PowerConsumptionMeasurementMethod  Class unit"
                ],
                [
                  "消費電力計測方法  インスタンス単位",
                  "PowerConsumptionMeasurementMethod  Instance unit"
                ]
              ]
            }
          ]
        },
        {
          "type": "FloorHeater",
          "message0": "床暖房 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "FloorHeater",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "ONタイマ予約設定  入",
                  "OnTimerSetting  ON"
                ],
                [
                  "ONタイマ予約設定  切",
                  "OnTimerSetting  OFF"
                ],
                [
                  "OFFタイマ予約設定  入",
                  "OffTimerSetting  ON"
                ],
                [
                  "OFFタイマ予約設定  切",
                  "OffTimerSetting  OFF"
                ],
                [
                  "温度設定1  自動",
                  "Temperature1  Automatic"
                ],
                [
                  "温度設定2  自動",
                  "Temperature2  Automatic"
                ],
                [
                  "室内温度計測値  不明",
                  "MeasuredRoomTemperature  Undefined"
                ],
                [
                  "特殊運転設定  通常運転",
                  "SpecialOperationSetting  Normal operation"
                ],
                [
                  "特殊運転設定  ひかえめ運転",
                  "SpecialOperationSetting  Moderate Operation"
                ],
                [
                  "特殊運転設定  ハイパワー運転",
                  "SpecialOperationSetting  High power operation"
                ],
                [
                  "デイリータイマー設定  タイマー切",
                  "DailyTimerSetting  Timer off"
                ],
                [
                  "デイリータイマー設定  タイマー１",
                  "DailyTimerSetting  Timer1"
                ],
                [
                  "デイリータイマー設定  タイマー２",
                  "DailyTimerSetting  Timer2"
                ],
                [
                  "消費電力計測方法  ノード単位",
                  "PowerConsumptionMeasurementMethod  Node unit"
                ],
                [
                  "消費電力計測方法  クラス単位",
                  "PowerConsumptionMeasurementMethod  Class unit"
                ],
                [
                  "消費電力計測方法  インスタンス単位",
                  "PowerConsumptionMeasurementMethod  Instance unit"
                ]
              ]
            }
          ]
        },
        {
          "type": "FuelCell",
          "message0": "燃料電池 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "FuelCell",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "ONタイマ予約設定  入",
                  "OnTimerSetting  ON"
                ],
                [
                  "ONタイマ予約設定  切",
                  "OnTimerSetting  OFF"
                ],
                [
                  "積算発電電力量リセット設定  リセット",
                  "CumulativePowerGenerationOutputResetSetting  Reset"
                ],
                [
                  "積算ガス消費量リセット設定  リセット",
                  "CumulativeGasConsumptionResetSetting  Reset"
                ],
                [
                  "宅内積算消費電力量リセット設定  リセット",
                  "InHouseCumulativePowerConsumptionReset  Reset"
                ],
                [
                  "指定発電状態  定格最大での発電",
                  "DesignatedPowerGenerationStatus  Power generation at the max. rating"
                ],
                [
                  "指定発電状態  負荷追従での発電",
                  "DesignatedPowerGenerationStatus  Load following power generation"
                ]
              ]
            }
          ]
        },
        {
          "type": "StorageBattery",
          "message0": "蓄電池 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "StorageBattery",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "充電方式  最大充電電力充電",
                  "ChargingMethod  Maximum charging electric energy charting"
                ],
                [
                  "充電方式  余剰電力充電",
                  "ChargingMethod  Surplus electric energy charging"
                ],
                [
                  "充電方式  指定電力充電",
                  "ChargingMethod  Designated electric energy charging"
                ],
                [
                  "充電方式  指定電流充電",
                  "ChargingMethod  Designated current power charging"
                ],
                [
                  "充電方式  その他",
                  "ChargingMethod  Others"
                ],
                [
                  "放電方式  最大放電電力放電",
                  "DischargingMethod  Maximum discharge electric energy discharging"
                ],
                [
                  "放電方式  余剰電力放電",
                  "DischargingMethod  Load following discharge"
                ],
                [
                  "放電方式  指定電力放電",
                  "DischargingMethod  Designated electric energy discharging"
                ],
                [
                  "放電方式  指定電流放電",
                  "DischargingMethod  Designated current power discharging"
                ],
                [
                  "放電方式  その他",
                  "DischargingMethod  Others"
                ],
                [
                  "再連系許可設定  入",
                  "ReInterconnectionPermissionSetting  ON"
                ],
                [
                  "再連系許可設定  切",
                  "ReInterconnectionPermissionSetting  OFF"
                ],
                [
                  "運転許可設定  入",
                  "OperationPermissionSetting  ON"
                ],
                [
                  "運転許可設定  切",
                  "OperationPermissionSetting  OFF"
                ],
                [
                  "自立運転許可設定  入",
                  "IndependentOperationPermissionSetting  ON"
                ],
                [
                  "自立運転許可設定  切",
                  "IndependentOperationPermissionSetting  OFF"
                ],
                [
                  "積算放電電力量リセット設定  リセット",
                  "MeasuredCumulativeDischargingElectricEnergyResetSetting  Reset"
                ],
                [
                  "積算充電電力量リセット設定  リセット",
                  "MeasuredCumulativeChargingElectricEnergyResetSetting  Reset"
                ],
                [
                  "蓄電池タイプ  不明",
                  "BatteryType  unknown"
                ],
                [
                  "蓄電池タイプ  鉛",
                  "BatteryType  lead"
                ],
                [
                  "蓄電池タイプ  NiH",
                  "BatteryType  ni-mh"
                ],
                [
                  "蓄電池タイプ  NiCd",
                  "BatteryType  ni-cd"
                ],
                [
                  "蓄電池タイプ  Li-ion",
                  "BatteryType  lib"
                ],
                [
                  "蓄電池タイプ  Zn",
                  "BatteryType  zinc"
                ],
                [
                  "蓄電池タイプ  充電式アルカリ",
                  "BatteryType  alkaline"
                ]
              ]
            }
          ]
        },
        {
          "type": "EvChargeAndDischargeSystem",
          "message0": "電気自動車充放電システム %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "EvChargeAndDischargeSystem",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "EvChargerAndDischarger",
          "message0": "電気自動車充放電器 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "EvChargerAndDischarger",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "充放電器タイプ  AC_CPLT",
                  "ChargerDischargerType  AC_CPLT"
                ],
                [
                  "充放電器タイプ  AC_HLC（充電のみ）",
                  "ChargerDischargerType  AC_HLC_Charge"
                ],
                [
                  "充放電器タイプ  AC_HLC（充放電可）",
                  "ChargerDischargerType  AC_HLC_ChargeDischarge"
                ],
                [
                  "充放電器タイプ  DCタイプ_AA（充電のみ）",
                  "ChargerDischargerType  DC_AA_Charge"
                ],
                [
                  "充放電器タイプ  DCタイプ_AA（充放電可）",
                  "ChargerDischargerType  DC_AA_ChargeDischarge"
                ],
                [
                  "充放電器タイプ  DCタイプ_AA（放電のみ）",
                  "ChargerDischargerType  DC_AA_Discharge"
                ],
                [
                  "充放電器タイプ  DCタイプ_BB（充電のみ）",
                  "ChargerDischargerType  DC_BB_Charge"
                ],
                [
                  "充放電器タイプ  DCタイプ_BB（充放電可）",
                  "ChargerDischargerType  DC_BB_ChargeDischarge"
                ],
                [
                  "充放電器タイプ  DCタイプ_BB（放電のみ）",
                  "ChargerDischargerType  DC_BB_Discharge"
                ],
                [
                  "充放電器タイプ  DCタイプ_EE（充電のみ）",
                  "ChargerDischargerType  DC_EE_Charge"
                ],
                [
                  "充放電器タイプ  DCタイプ_EE（充放電可）",
                  "ChargerDischargerType  DC_EE_ChargeDischarge"
                ],
                [
                  "充放電器タイプ  DCタイプ_EE（放電のみ）",
                  "ChargerDischargerType  DC_EE_Discharge"
                ],
                [
                  "充放電器タイプ  DCタイプ_FF（充電のみ）",
                  "ChargerDischargerType  DC_FF_Charge"
                ],
                [
                  "充放電器タイプ  DCタイプ_FF（充放電可）",
                  "ChargerDischargerType  DC_FF_ChargeDischarge"
                ],
                [
                  "充放電器タイプ  DCタイプ_FF（放電のみ）",
                  "ChargerDischargerType  DC_FF_Discharge"
                ],
                [
                  "車両接続確認  接続確認",
                  "VehicleConnectionConfirmation  Connection confirmation"
                ],
                [
                  "積算放電電力量リセット設定  リセット",
                  "CumulativeAmountOfDischargingElectricEnergyResetSetting  Reset"
                ],
                [
                  "積算充電電力量リセット設定  リセット",
                  "CumulativeAmountOfChargingElectricEnergyResetSetting  Reset"
                ],
                [
                  "系統連系状態  系統連系（逆潮流可）",
                  "SystemInterconnectedType  Grid connection(reverse flow acceptable)"
                ],
                [
                  "系統連系状態  独立",
                  "SystemInterconnectedType  Independent operation"
                ],
                [
                  "系統連系状態  系統連系（逆潮流不可）",
                  "SystemInterconnectedType  Grid connection(reverse flow not acceptable)"
                ]
              ]
            }
          ]
        },
        {
          "type": "EngineCogeneration",
          "message0": "エンジンコージェネレーション %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "EngineCogeneration",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "積算発電電力量リセット設定  リセット",
                  "CumulativePowerGenerationOutputResetSetting  Reset"
                ],
                [
                  "積算ガス消費量リセット設定  リセット",
                  "CumulativeGasConsumptionResetSetting  Reset"
                ],
                [
                  "発電動作状態  発電中",
                  "PowerGenerationStatus  Generating"
                ],
                [
                  "発電動作状態  停止中",
                  "PowerGenerationStatus  Stopped"
                ],
                [
                  "発電動作状態  アイドル中",
                  "PowerGenerationStatus  Idling"
                ],
                [
                  "宅内積算消費電力量リセット設定  リセット",
                  "InHouseCumulativePowerConsumptionReset  Reset"
                ],
                [
                  "系統連系状態  系統連系（逆潮流可）",
                  "SystemInterconnectedType  System-interconnected type (reverse power flow acceptable)"
                ],
                [
                  "系統連系状態  独立",
                  "SystemInterconnectedType  Independent type"
                ],
                [
                  "系統連系状態  系統連系（逆潮流不可）",
                  "SystemInterconnectedType  System-interconnected type(reverse power flow not acceptable)"
                ]
              ]
            }
          ]
        },
        {
          "type": "WattHourMeter",
          "message0": "電力量メータ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "WattHourMeter",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "WaterFlowMeter",
          "message0": "水流量メータ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "WaterFlowMeter",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "水流量メータ区分  上水",
                  "WaterFlowMeterClassification  running water"
                ],
                [
                  "水流量メータ区分  中水",
                  "WaterFlowMeterClassification  recycled water"
                ],
                [
                  "水流量メータ区分  下水",
                  "WaterFlowMeterClassification  sewage water"
                ],
                [
                  "水流量メータ区分  その他",
                  "WaterFlowMeterClassification  other water"
                ],
                [
                  "所有者区分  指定なし",
                  "OwnerClassification  Not specified"
                ],
                [
                  "所有者区分  事業体",
                  "OwnerClassification  Public waterworks company"
                ],
                [
                  "所有者区分  民間会社",
                  "OwnerClassification  Private sector company"
                ],
                [
                  "所有者区分  個人",
                  "OwnerClassification  Individual"
                ],
                [
                  "検針データ異常検知状態  有",
                  "DetectionOfAbnormalValueInMeteringData  YES"
                ],
                [
                  "検針データ異常検知状態  無",
                  "DetectionOfAbnormalValueInMeteringData  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "GasMeter",
          "message0": "ガスメータ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "GasMeter",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "LpGasMeter",
          "message0": "LPガスメータ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "LpGasMeter",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "テスト発呼設定  有",
                  "TestCallSetting  YES"
                ],
                [
                  "テスト発呼設定  無",
                  "TestCallSetting  NO"
                ],
                [
                  "検針データ異常検知状態  有",
                  "ErrorDetectionStatusOfMeteringData  YES"
                ],
                [
                  "検針データ異常検知状態  無",
                  "ErrorDetectionStatusOfMeteringData  NO"
                ],
                [
                  "センター弁遮断状態  有",
                  "CenterValveShutOffStatus  YES"
                ],
                [
                  "センター弁遮断状態  無",
                  "CenterValveShutOffStatus  NO"
                ],
                [
                  "センター弁遮断復帰許可状態  有",
                  "CenterValveShutOffRecoveryPermissionSettingStatus  YES"
                ],
                [
                  "センター弁遮断復帰許可状態  無",
                  "CenterValveShutOffRecoveryPermissionSettingStatus  NO"
                ],
                [
                  "緊急弁遮断状態  有",
                  "EmergencyValveShutOffStatus  YES"
                ],
                [
                  "緊急弁遮断状態  無",
                  "EmergencyValveShutOffStatus  NO"
                ],
                [
                  "遮断弁開閉状態  有",
                  "ShutOffValveOpenCloseStatus  YES"
                ],
                [
                  "遮断弁開閉状態  無",
                  "ShutOffValveOpenCloseStatus  NO"
                ],
                [
                  "残量管理警告レベル  残量管理警告レベル１",
                  "ResidualVolumeControlWarning  Residual volume control warning level 1"
                ],
                [
                  "残量管理警告レベル  残量管理警告レベル２",
                  "ResidualVolumeControlWarning  Residual volume control warning level 2"
                ],
                [
                  "残量管理警告レベル  残量管理警告レベル３",
                  "ResidualVolumeControlWarning  Residual volume control warning level 3"
                ],
                [
                  "残量管理警告レベル  残量管理警告無し",
                  "ResidualVolumeControlWarning  No residual volume control warning"
                ]
              ]
            }
          ]
        },
        {
          "type": "PowerDistributionBoard",
          "message0": "分電盤メータリング %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "PowerDistributionBoard",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "計測チャンネル数（片方向）  不明",
                  "NumberOfMeasurementChannel(simplex)  Undefined"
                ],
                [
                  "計測チャンネル数（双方向）  不明",
                  "NumberOfMeasurementChannels(duplex)  Undefined"
                ]
              ]
            }
          ]
        },
        {
          "type": "SmartElectricEnergyMeter",
          "message0": "スマート電力量メータ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "SmartElectricEnergyMeter",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "LowVoltageSmartElectricEnergyMeter",
          "message0": "低圧スマート電力量メータ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "LowVoltageSmartElectricEnergyMeter",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "SmartGasMeter",
          "message0": "スマートガスメータ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "SmartGasMeter",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "ガス区分設定  都市ガス",
                  "GasMeterClassificationSetting  City gas"
                ],
                [
                  "ガス区分設定  LPガス",
                  "GasMeterClassificationSetting  LP gas"
                ],
                [
                  "ガス区分設定  天然ガス",
                  "GasMeterClassificationSetting  Natural gas"
                ],
                [
                  "ガス区分設定  その他",
                  "GasMeterClassificationSetting  Other"
                ],
                [
                  "所有者区分設定  指定無し",
                  "OwnerClassificationSetting  Not specified"
                ],
                [
                  "所有者区分設定  都市ガス",
                  "OwnerClassificationSetting  City gas"
                ],
                [
                  "所有者区分設定  LPガス",
                  "OwnerClassificationSetting  LP gas"
                ],
                [
                  "所有者区分設定  民間会社",
                  "OwnerClassificationSetting  Private-sector company"
                ],
                [
                  "所有者区分設定  個人",
                  "OwnerClassificationSetting  Indivisual"
                ],
                [
                  "センター弁遮断復帰許可状態  有",
                  "PermissionFromTheCenterToReopenTheValveClosedByTheCenter  YES"
                ],
                [
                  "センター弁遮断復帰許可状態  無",
                  "PermissionFromTheCenterToReopenTheValveClosedByTheCenter  NO"
                ],
                [
                  "緊急弁遮断状態  有",
                  "EmergencyClosureOfShutoffValve  YES"
                ],
                [
                  "緊急弁遮断状態  無",
                  "EmergencyClosureOfShutoffValve  NO"
                ],
                [
                  "遮断弁開閉状態  開",
                  "ShutoffValveStatus  Open"
                ],
                [
                  "遮断弁開閉状態  閉",
                  "ShutoffValveStatus  Close"
                ]
              ]
            }
          ]
        },
        {
          "type": "HighVoltageSmartElectricEnergyMeter",
          "message0": "高圧スマート電力量メータ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "HighVoltageSmartElectricEnergyMeter",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "KerosenseMeter",
          "message0": "灯油メータ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "KerosenseMeter",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "SmartKerosenseMeter",
          "message0": "スマート灯油メータ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "SmartKerosenseMeter",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "所有者区分設定  指定無し",
                  "OwnerCategorySetting  Not specified"
                ],
                [
                  "所有者区分設定  灯油販売",
                  "OwnerCategorySetting  Kerosene sales"
                ],
                [
                  "所有者区分設定  民間会社",
                  "OwnerCategorySetting  Private-sector company"
                ],
                [
                  "所有者区分設定  個人",
                  "OwnerCategorySetting  Indivisual"
                ],
                [
                  "検針データ異常検知状態  有",
                  "MeterReadingDataAbnormalityDetectionStatus  YES"
                ],
                [
                  "検針データ異常検知状態  無",
                  "MeterReadingDataAbnormalityDetectionStatus  NO"
                ],
                [
                  "残量管理警告レベル  レベル１",
                  "ResidualVolumeControlWarningLevel  Level 1"
                ],
                [
                  "残量管理警告レベル  レベル２",
                  "ResidualVolumeControlWarningLevel  Level 2"
                ],
                [
                  "残量管理警告レベル  レベル３",
                  "ResidualVolumeControlWarningLevel  Level 3"
                ],
                [
                  "残量管理警告レベル  無し",
                  "ResidualVolumeControlWarningLevel  None"
                ]
              ]
            }
          ]
        },
        {
          "type": "GeneralLighting",
          "message0": "一般照明 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "GeneralLighting",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "ONタイマ予約設定  入",
                  "OnTimerSetting  ON"
                ],
                [
                  "ONタイマ予約設定  切",
                  "OnTimerSetting  OFF"
                ],
                [
                  "OFFタイマ予約設定  入",
                  "OffTimerSetting  ON"
                ],
                [
                  "OFFタイマ予約設定  切",
                  "OffTimerSetting  OFF"
                ],
                [
                  "点灯モード設定  自動",
                  "LightingModeSetting  Automatic"
                ],
                [
                  "点灯モード設定  通常灯",
                  "LightingModeSetting  Normal Lighting"
                ],
                [
                  "点灯モード設定  常夜灯",
                  "LightingModeSetting  Night Lighting"
                ],
                [
                  "点灯モード設定  カラー灯",
                  "LightingModeSetting  Color Lighting"
                ],
                [
                  "通常灯モード時光色設定  電球色",
                  "LightColorSettingForMainLighting  Incandescent lamp color"
                ],
                [
                  "通常灯モード時光色設定  白色",
                  "LightColorSettingForMainLighting  White"
                ],
                [
                  "通常灯モード時光色設定  昼白色",
                  "LightColorSettingForMainLighting  Daylight white"
                ],
                [
                  "通常灯モード時光色設定  昼光色",
                  "LightColorSettingForMainLighting  Daylight color"
                ],
                [
                  "通常灯モード時光色設定  その他",
                  "LightColorSettingForMainLighting  Other"
                ],
                [
                  "常夜灯モード時光色設定  電球色",
                  "LightColorSettingForNightLighting  Incandescent lamp color"
                ],
                [
                  "常夜灯モード時光色設定  白色",
                  "LightColorSettingForNightLighting  White"
                ],
                [
                  "常夜灯モード時光色設定  昼白色",
                  "LightColorSettingForNightLighting  Daylight white"
                ],
                [
                  "常夜灯モード時光色設定  昼光色",
                  "LightColorSettingForNightLighting  Daylight color"
                ],
                [
                  "常夜灯モード時光色設定  その他",
                  "LightColorSettingForNightLighting  Other"
                ],
                [
                  "自動モード時点灯モード状態  通常灯",
                  "LightingModeStatusInAutoMode  Normal Lighting"
                ],
                [
                  "自動モード時点灯モード状態  常夜灯",
                  "LightingModeStatusInAutoMode  Night Lighting"
                ],
                [
                  "自動モード時点灯モード状態  消灯",
                  "LightingModeStatusInAutoMode  Color Lighting"
                ],
                [
                  "自動モード時点灯モード状態  カラー灯",
                  "LightingModeStatusInAutoMode  Color Lighting"
                ]
              ]
            }
          ]
        },
        {
          "type": "MonoFunctionalLighting",
          "message0": "単機能照明 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "MonoFunctionalLighting",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "LightingForSolidLightEmittingSource",
          "message0": "固体発光光源用照明 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "LightingForSolidLightEmittingSource",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "ON タイマ予約設定  有",
                  "OnTimerReservationSetting  YES"
                ],
                [
                  "ON タイマ予約設定  無",
                  "OnTimerReservationSetting  NO"
                ],
                [
                  "OFF タイマ予約設定  有",
                  "OffTimerReservationSetting  YES"
                ],
                [
                  "OFF タイマ予約設定  無",
                  "OffTimerReservationSetting  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "Buzzar",
          "message0": "ブザー %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "Buzzar",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "音発生設定  有",
                  "SoundGenerationSetting  YES"
                ],
                [
                  "音発生設定  無",
                  "SoundGenerationSetting  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "EvCharger",
          "message0": "電気自動車充電器 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "EvCharger",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "充電器タイプ  AC_CPLT",
                  "ChargerDischargerType  AC_CPLT"
                ],
                [
                  "充電器タイプ  AC_HLC（充電のみ）",
                  "ChargerDischargerType  AC_HLC_Charge"
                ],
                [
                  "充電器タイプ  DCタイプ_AA（充電のみ）",
                  "ChargerDischargerType  DC_AA_Charge"
                ],
                [
                  "充電器タイプ  DCタイプ_BB（充電のみ）",
                  "ChargerDischargerType  DC_BB_Charge"
                ],
                [
                  "充電器タイプ  DCタイプ_EE（充電のみ）",
                  "ChargerDischargerType  DC_EE_Charge"
                ],
                [
                  "充電器タイプ  DCタイプ_FF（充電のみ）",
                  "ChargerDischargerType  DC_FF_Charge"
                ],
                [
                  "車両接続確認  接続確認",
                  "VehicleConnectionConfirmation  Connection confirmation"
                ],
                [
                  "積算充電電力量リセット設定  リセット",
                  "CumulativeAmountOfChargingElectricEnergyResetSetting  Reset"
                ],
                [
                  "運転モード設定  充電",
                  "OperationModeSetting  Charge"
                ],
                [
                  "運転モード設定  待機",
                  "OperationModeSetting  standby"
                ],
                [
                  "運転モード設定  停止",
                  "OperationModeSetting  Idle"
                ],
                [
                  "運転モード設定  その他",
                  "OperationModeSetting  Other"
                ]
              ]
            }
          ]
        },
        {
          "type": "HouseholdSmallWindTurbinePowerGeneration",
          "message0": "Household small wind turbine power generation %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "HouseholdSmallWindTurbinePowerGeneration",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "System interconnection status  System-linked type",
                  "SystemInterconnectionStatus  System-linked type"
                ],
                [
                  "System interconnection status  Independent type",
                  "SystemInterconnectionStatus  Independent type"
                ],
                [
                  "System interconnection status  Hybrid type",
                  "SystemInterconnectionStatus  Hybrid type"
                ],
                [
                  "Resetting cumulative amount of electricity generated  リセット",
                  "ResettingCumulativeAmountOfElectricityGenerated  Reset"
                ],
                [
                  "Resetting cumulative amount of electricity sold  リセット",
                  "ResettingCumulativeAmountOfElectricitySold  Reset"
                ],
                [
                  "Braking status  入",
                  "BrakingStatus  ON"
                ],
                [
                  "Braking status  切",
                  "BrakingStatus  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "LightingSystem",
          "message0": "照明システム %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "LightingSystem",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "ExtendedLightingSystem",
          "message0": "拡張照明システム %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "ExtendedLightingSystem",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "自動動作制御設定  入",
                  "AutomaticOperationControllingSetting  ON"
                ],
                [
                  "自動動作制御設定  切",
                  "AutomaticOperationControllingSetting  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "MultipleInputPcs",
          "message0": "マルチ入力PCS %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "MultipleInputPcs",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "系統連系状態  系統連系（逆潮流可）",
                  "SystemInterconnectedType  System-interconnected type(reverse power flow acceptable)"
                ],
                [
                  "系統連系状態  独立",
                  "SystemInterconnectedType  Independent type"
                ],
                [
                  "系統連系状態  系統連系（逆潮流不可）",
                  "SystemInterconnectedType  System-interconnected type(reverse power flow not acceptable)"
                ]
              ]
            }
          ]
        },
        {
          "type": "HybridWaterHeater",
          "message0": "ハイブリッド給湯器 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "HybridWaterHeater",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "沸き上げ自動設定  自動沸き上げ",
                  "AutomaticWaterHeatingSetting  Auto Heating"
                ],
                [
                  "沸き上げ自動設定  手動沸き上げ停止",
                  "AutomaticWaterHeatingSetting  Manual No Heating"
                ],
                [
                  "沸き上げ自動設定  手動沸き上げ",
                  "AutomaticWaterHeatingSetting  Manual Heating"
                ],
                [
                  "給湯沸き上げ中状態  有",
                  "WaterHeatingStatus  YES"
                ],
                [
                  "給湯沸き上げ中状態  無",
                  "WaterHeatingStatus  NO"
                ],
                [
                  "暖房沸き上げ中状態  有",
                  "HeaterStatus  YES"
                ],
                [
                  "暖房沸き上げ中状態  無",
                  "HeaterStatus  NO"
                ],
                [
                  "補助熱源機給湯モード設定  入",
                  "HotWaterSupplyModeSettingForAuxiliaryHeatSourceMachine  ON"
                ],
                [
                  "補助熱源機給湯モード設定  切",
                  "HotWaterSupplyModeSettingForAuxiliaryHeatSourceMachine  OFF"
                ],
                [
                  "補助熱源機暖房モード設定  入",
                  "HeaterModeSettingForAuxiliaryHeatSourceMachine  ON"
                ],
                [
                  "補助熱源機暖房モード設定  切",
                  "HeaterModeSettingForAuxiliaryHeatSourceMachine  OFF"
                ],
                [
                  "太陽光発電連携モード設定  モード切",
                  "LinkageModeSettingForSolarPowerGeneration  Mode off"
                ],
                [
                  "太陽光発電連携モード設定  自家消費",
                  "LinkageModeSettingForSolarPowerGeneration  Household consumption"
                ],
                [
                  "太陽光発電連携モード設定  売電優先",
                  "LinkageModeSettingForSolarPowerGeneration  Prioritizing electricity sales"
                ],
                [
                  "太陽光発電連携モード設定  経済性考慮",
                  "LinkageModeSettingForSolarPowerGeneration  Economic efficiency"
                ],
                [
                  "給湯中状態  有",
                  "HotWaterSupplyStatus  YES"
                ],
                [
                  "給湯中状態  無",
                  "HotWaterSupplyStatus  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "ElectricHotWaterPot",
          "message0": "電気ポット %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "ElectricHotWaterPot",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "蓋開閉状態  開",
                  "CoverOpenCloseStatus  Open"
                ],
                [
                  "蓋開閉状態  閉",
                  "CoverOpenCloseStatus  Close"
                ],
                [
                  "湯切れ警告状態  有",
                  "NoWaterwarning  YES"
                ],
                [
                  "湯切れ警告状態  無",
                  "NoWaterwarning  NO"
                ],
                [
                  "沸騰設定  沸騰開始",
                  "BoilUpSetting  Boil-up start"
                ],
                [
                  "沸騰設定  沸騰停止／保温",
                  "BoilUpSetting  Boil-up stop/warmer"
                ],
                [
                  "沸騰／保温モード設定  クエン酸洗浄",
                  "BoilUpWarmerModeSetting  Citric acid cleaning"
                ],
                [
                  "沸騰／保温モード設定  通常保温",
                  "BoilUpWarmerModeSetting  normal warmer"
                ],
                [
                  "沸騰／保温モード設定  省エネ保温",
                  "BoilUpWarmerModeSetting  power-saving warmer"
                ],
                [
                  "出湯状態  有",
                  "HotWaterDischargeStatus  YES"
                ],
                [
                  "出湯状態  無",
                  "HotWaterDischargeStatus  NO"
                ],
                [
                  "ロック状態  有",
                  "LockStatus  YES"
                ],
                [
                  "ロック状態  無",
                  "LockStatus  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "Refrigerator",
          "message0": "冷凍冷蔵庫 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "Refrigerator",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "急速冷凍動作設定  通常冷凍",
                  "QuickFreezeFunctionSetting  normal operation"
                ],
                [
                  "急速冷凍動作設定  急速冷凍",
                  "QuickFreezeFunctionSetting  quick freeze"
                ],
                [
                  "急速冷凍動作設定  急速冷凍待機",
                  "QuickFreezeFunctionSetting  standby for quick freezing"
                ],
                [
                  "急速冷蔵動作設定  通常冷蔵",
                  "QuickRefrigerationFunctionSetting  normal operation"
                ],
                [
                  "急速冷蔵動作設定  急速冷蔵",
                  "QuickRefrigerationFunctionSetting  quick refrigeration"
                ],
                [
                  "急速冷蔵動作設定  急速冷蔵待機",
                  "QuickRefrigerationFunctionSetting  standby for quick refrigeration"
                ],
                [
                  "製氷許可設定  製氷許可",
                  "IcemakerSetting  enable icemaker"
                ],
                [
                  "製氷許可設定  製氷禁止",
                  "IcemakerSetting  disable icemaker"
                ],
                [
                  "製氷許可設定  製氷一定時間禁止",
                  "IcemakerSetting  temporarily disable icemaker"
                ],
                [
                  "製氷動作状態  有",
                  "IcemakerOperationStatus  YES"
                ],
                [
                  "製氷動作状態  無",
                  "IcemakerOperationStatus  NO"
                ],
                [
                  "製氷用給水タンク状態  水あり",
                  "IcemakerTankStatus  Water in tank"
                ],
                [
                  "製氷用給水タンク状態  水なし",
                  "IcemakerTankStatus  No water"
                ],
                [
                  "冷蔵室加湿動作設定  入",
                  "RefrigeratorCompartmentHumidificationFunctionSetting  ON"
                ],
                [
                  "冷蔵室加湿動作設定  切",
                  "RefrigeratorCompartmentHumidificationFunctionSetting  OFF"
                ],
                [
                  "野菜室加湿動作設定  入",
                  "VegetableCompartmentHumidificationFunctionSetting  ON"
                ],
                [
                  "野菜室加湿動作設定  切",
                  "VegetableCompartmentHumidificationFunctionSetting  OFF"
                ],
                [
                  "脱臭動作設定  入",
                  "DeodorizationFunctionSetting  ON"
                ],
                [
                  "脱臭動作設定  切",
                  "DeodorizationFunctionSetting  OFF"
                ],
                [
                  "ドア開閉状態  開",
                  "DoorOpenCloseStatus  Open"
                ],
                [
                  "ドア開閉状態  閉",
                  "DoorOpenCloseStatus  Close"
                ],
                [
                  "ドア開放警告状態  有",
                  "DoorOpenWarning  YES"
                ],
                [
                  "ドア開放警告状態  無",
                  "DoorOpenWarning  NO"
                ],
                [
                  "冷蔵室ドア開閉状態  開",
                  "RefrigeratorCompartmentDoorStatus  Open"
                ],
                [
                  "冷蔵室ドア開閉状態  閉",
                  "RefrigeratorCompartmentDoorStatus  Close"
                ],
                [
                  "冷凍室ドア開閉状態  開",
                  "FreezerCompartmentDoorStatus  Open"
                ],
                [
                  "冷凍室ドア開閉状態  閉",
                  "FreezerCompartmentDoorStatus  Close"
                ],
                [
                  "氷温室ドア開閉状態  開",
                  "IceCompartmentDoorStatus  Open"
                ],
                [
                  "氷温室ドア開閉状態  閉",
                  "IceCompartmentDoorStatus  Close"
                ],
                [
                  "野菜室ドア開閉状態  開",
                  "VegetableCompartmentDoorStatus  Open"
                ],
                [
                  "野菜室ドア開閉状態  閉",
                  "VegetableCompartmentDoorStatus  Close"
                ],
                [
                  "切換室ドア開閉状態  開",
                  "MultiRefrigeratingModeCompartmentDoorStatus  Open"
                ],
                [
                  "切換室ドア開閉状態  閉",
                  "MultiRefrigeratingModeCompartmentDoorStatus  Close"
                ]
              ]
            }
          ]
        },
        {
          "type": "CombinationMicrowaveOven",
          "message0": "オーブンレンジ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "CombinationMicrowaveOven",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "ドア開閉状態  開",
                  "DoorOpenCloseStatus  Open"
                ],
                [
                  "ドア開閉状態  閉",
                  "DoorOpenCloseStatus  Close"
                ],
                [
                  "加熱状態  初期状態",
                  "HeatingStatus  Initial state"
                ],
                [
                  "加熱状態  運転中",
                  "HeatingStatus  Heating"
                ],
                [
                  "加熱状態  一時停止中",
                  "HeatingStatus  Heating suspended"
                ],
                [
                  "加熱状態  完了報知中",
                  "HeatingStatus  Reporting completion of heating cycle"
                ],
                [
                  "加熱状態  設定中",
                  "HeatingStatus  Setting"
                ],
                [
                  "加熱状態  予熱中",
                  "HeatingStatus  Preheating"
                ],
                [
                  "加熱状態  予熱完了保温中",
                  "HeatingStatus  Preheat temperature maintenance"
                ],
                [
                  "加熱状態  加熱途中報知一時停止中",
                  "HeatingStatus  Heating temporarily stopped for manual cooking action"
                ],
                [
                  "加熱設定  加熱開始・再開",
                  "HeatingSetting  Start/restart heating"
                ],
                [
                  "加熱設定  加熱一時停止",
                  "HeatingSetting  Suspend heating"
                ],
                [
                  "加熱設定  加熱停止",
                  "HeatingSetting  Stop heating"
                ],
                [
                  "オーブンモード設定  自動選択",
                  "OvenModeSetting  Automatic selection"
                ],
                [
                  "オーブンモード設定  対流オーブン",
                  "OvenModeSetting  Convection oven"
                ],
                [
                  "オーブンモード設定  熱風オーブン",
                  "OvenModeSetting  Circulation oven"
                ],
                [
                  "オーブンモード設定  複合オーブン",
                  "OvenModeSetting  Hybrid oven"
                ],
                [
                  "オーブンモード設定  未設定",
                  "OvenModeSetting  undefined"
                ],
                [
                  "オーブン予熱設定  予熱あり",
                  "OvenPreheatingSetting  With preheating"
                ],
                [
                  "オーブン予熱設定  予熱なし",
                  "OvenPreheatingSetting  Without preheating"
                ],
                [
                  "オーブン予熱設定  未設定",
                  "OvenPreheatingSetting  undefined"
                ],
                [
                  "発酵モード設定  自動選択",
                  "FermentingModeSetting  Automatic selection"
                ],
                [
                  "発酵モード設定  対流発酵",
                  "FermentingModeSetting  Convection fermentation"
                ],
                [
                  "発酵モード設定  熱風発酵",
                  "FermentingModeSetting  Circulation fermentation"
                ],
                [
                  "発酵モード設定  複合発酵",
                  "FermentingModeSetting  Hybrid fermentation"
                ],
                [
                  "発酵モード設定  電子レンジ発酵",
                  "FermentingModeSetting  Microwave fermentation"
                ],
                [
                  "発酵モード設定  未設定",
                  "FermentingModeSetting  undefined"
                ],
                [
                  "加熱モード設定  電子レンジ加熱",
                  "HeatingModeSetting  Microwave heating"
                ],
                [
                  "加熱モード設定  解凍",
                  "HeatingModeSetting  Defrosting"
                ],
                [
                  "加熱モード設定  オーブン",
                  "HeatingModeSetting  Oven"
                ],
                [
                  "加熱モード設定  グリル",
                  "HeatingModeSetting  Grill"
                ],
                [
                  "加熱モード設定  トースト",
                  "HeatingModeSetting  Toaster"
                ],
                [
                  "加熱モード設定  発酵",
                  "HeatingModeSetting  Fermenting"
                ],
                [
                  "加熱モード設定  煮込み",
                  "HeatingModeSetting  Stewing"
                ],
                [
                  "加熱モード設定  スチーム加熱",
                  "HeatingModeSetting  Steaming"
                ],
                [
                  "加熱モード設定  電子レンジ２段加熱",
                  "HeatingModeSetting  Two stage microwave heating"
                ],
                [
                  "加熱モード設定  未設定",
                  "HeatingModeSetting  undefined"
                ],
                [
                  "自動加熱設定  自動",
                  "AutomaticHeatingSetting  Automatic"
                ],
                [
                  "自動加熱設定  マニュアル",
                  "AutomaticHeatingSetting  Manual"
                ],
                [
                  "自動加熱設定  未設定",
                  "AutomaticHeatingSetting  undefined"
                ]
              ]
            }
          ]
        },
        {
          "type": "CookingHeater",
          "message0": "クッキングヒータ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "CookingHeater",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "チャイルドロック設定  OFF",
                  "ChildLockSetting  OFF"
                ],
                [
                  "チャイルドロック設定  ON",
                  "ChildLockSetting  ON"
                ],
                [
                  "ラジエントヒータロック設定  OFF",
                  "RadiantHeaterLockSetting  OFF"
                ],
                [
                  "ラジエントヒータロック設定  ON",
                  "RadiantHeaterLockSetting  ON"
                ],
                [
                  "一括停止設定  一括加熱停止",
                  "AllStopSetting  Stop all heating"
                ]
              ]
            }
          ]
        },
        {
          "type": "RiceCooker",
          "message0": "炊飯器 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "RiceCooker",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "炊飯予約設定  入",
                  "RiceCookingReservationSetting  ON"
                ],
                [
                  "炊飯予約設定  切",
                  "RiceCookingReservationSetting  OFF"
                ],
                [
                  "蓋開閉状態  開",
                  "CoverOpenCloseStatus  Open"
                ],
                [
                  "蓋開閉状態  閉",
                  "CoverOpenCloseStatus  Close"
                ],
                [
                  "炊飯状態  停止",
                  "RiceCookingStatus  Stop"
                ],
                [
                  "炊飯状態  予熱",
                  "RiceCookingStatus  Preheating"
                ],
                [
                  "炊飯状態  炊飯",
                  "RiceCookingStatus  Rice cooking"
                ],
                [
                  "炊飯状態  蒸らし",
                  "RiceCookingStatus  Steaming"
                ],
                [
                  "炊飯状態  炊飯完了",
                  "RiceCookingStatus  "
                ],
                [
                  "炊飯制御設定  炊飯開始・再開",
                  "RiceCookingControlSetting  Rice cooking start/restart"
                ],
                [
                  "炊飯制御設定  炊飯一時停止",
                  "RiceCookingControlSetting  Rice cooking suspension"
                ],
                [
                  "保温設定  有",
                  "WarmerSetting  YES"
                ],
                [
                  "保温設定  無",
                  "WarmerSetting  NO"
                ],
                [
                  "内なべ取り外し状態  有",
                  "InnerPotRemovalStatus  YES"
                ],
                [
                  "内なべ取り外し状態  無",
                  "InnerPotRemovalStatus  NO"
                ],
                [
                  "蓋取り外し状態  有",
                  "CoverRemovalStatus  YES"
                ],
                [
                  "蓋取り外し状態  無",
                  "CoverRemovalStatus  NO"
                ]
              ]
            }
          ]
        },
        {
          "type": "WashingMachine",
          "message0": "洗濯機 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "WashingMachine",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "ONタイマ予約設定  入",
                  "OnTimerSetting  ON"
                ],
                [
                  "ONタイマ予約設定  切",
                  "OnTimerSetting  OFF"
                ],
                [
                  "ドア開閉状態  開",
                  "DoorCoverOpenCloseStatus  Open"
                ],
                [
                  "ドア開閉状態  閉",
                  "DoorCoverOpenCloseStatus  Close"
                ],
                [
                  "洗濯設定  洗濯開始・再開",
                  "WashingMachineSetting   Start/restart the washing cycle"
                ],
                [
                  "洗濯設定  洗濯一時停止",
                  "WashingMachineSetting   Suspend the washing cycle"
                ],
                [
                  "洗濯設定  洗濯停止",
                  "WashingMachineSetting   Stop the washing cycle"
                ],
                [
                  "洗濯遷移状態  洗い",
                  "CurrentStageOfWashingCycle  Washing"
                ],
                [
                  "洗濯遷移状態  すすぎ",
                  "CurrentStageOfWashingCycle  Rinsing"
                ],
                [
                  "洗濯遷移状態  脱水",
                  "CurrentStageOfWashingCycle  Spin drying"
                ],
                [
                  "洗濯遷移状態  一時停止",
                  "CurrentStageOfWashingCycle  Suspended"
                ],
                [
                  "洗濯遷移状態  洗濯完了・停止",
                  "CurrentStageOfWashingCycle  The washing cycle stopped/completed"
                ]
              ]
            }
          ]
        },
        {
          "type": "ClothDryer",
          "message0": "衣類乾燥機 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "ClothDryer",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "ONタイマ予約設定  入",
                  "OnTimerSetting  ON"
                ],
                [
                  "ONタイマ予約設定  切",
                  "OnTimerSetting  OFF"
                ],
                [
                  "扉・蓋開閉状態  開",
                  "DoorCoverOpenCloseStatus  Open"
                ],
                [
                  "扉・蓋開閉状態  閉",
                  "DoorCoverOpenCloseStatus  Close"
                ],
                [
                  "乾燥設定  乾燥開始・再開",
                  "DryingSetting   Start/restart drying"
                ],
                [
                  "乾燥設定  乾燥一時停止",
                  "DryingSetting   Suspend drying"
                ],
                [
                  "乾燥設定  乾燥停止",
                  "DryingSetting   Stop drying"
                ],
                [
                  "乾燥遷移状態  乾燥",
                  "DryingStatus  Drying in progress"
                ],
                [
                  "乾燥遷移状態  一時停止",
                  "DryingStatus  Drying suspended"
                ],
                [
                  "乾燥遷移状態  乾燥完了・一時停止",
                  "DryingStatus  Drying stopped/completed"
                ]
              ]
            }
          ]
        },
        {
          "type": "CommercialShowCase",
          "message0": "業務用ショーケース %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "CommercialShowCase",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "運転モード設定  冷却",
                  "OperationModeSetting  Cooling"
                ],
                [
                  "運転モード設定  非冷",
                  "OperationModeSetting  Non-cooling"
                ],
                [
                  "運転モード設定  霜取り",
                  "OperationModeSetting  Defrosting"
                ],
                [
                  "運転モード設定  その他",
                  "OperationModeSetting  Other"
                ],
                [
                  "ショーケースタイプ情報  ノンフロンインバータ（CO2）",
                  "ShowcaseTypeInformation  Non-fluorocarbon inverter"
                ],
                [
                  "ショーケースタイプ情報  インバータ",
                  "ShowcaseTypeInformation  Inverter"
                ],
                [
                  "ショーケースタイプ情報  その他",
                  "ShowcaseTypeInformation  Other"
                ],
                [
                  "ドアタイプ情報  Open",
                  "DoorTypeInformation  Open"
                ],
                [
                  "ドアタイプ情報  Close",
                  "DoorTypeInformation  Close"
                ],
                [
                  "ショーケース構成情報  別置型",
                  "ShowcaseConfigurationInformation  Separate type"
                ],
                [
                  "ショーケース構成情報  内蔵型",
                  "ShowcaseConfigurationInformation  Built-in type"
                ],
                [
                  "ショーケース形状情報  箱型",
                  "ShowcaseShapeInformation  Box type"
                ],
                [
                  "ショーケース形状情報  卓上型",
                  "ShowcaseShapeInformation  Desktop type"
                ],
                [
                  "ショーケース形状情報  三面ガラス式",
                  "ShowcaseShapeInformation  Triple glass type"
                ],
                [
                  "ショーケース形状情報  四面ガラス式",
                  "ShowcaseShapeInformation  Quadruple glass type"
                ],
                [
                  "ショーケース形状情報  リーチイン",
                  "ShowcaseShapeInformation  Reach-in"
                ],
                [
                  "ショーケース形状情報  ガラストップ",
                  "ShowcaseShapeInformation  Glass top type"
                ],
                [
                  "ショーケース形状情報  多段型オープン（天井吹出形）",
                  "ShowcaseShapeInformation  Multistage open (ceiling blowoff type)"
                ],
                [
                  "ショーケース形状情報  多段型オープン（背面吹出形）",
                  "ShowcaseShapeInformation  ultistageopen (backside blowoff type)"
                ],
                [
                  "ショーケース形状情報  平型",
                  "ShowcaseShapeInformation  Flat type"
                ],
                [
                  "ショーケース形状情報  ウォークイン",
                  "ShowcaseShapeInformation  Walk-in type"
                ],
                [
                  "ショーケース形状情報  その他",
                  "ShowcaseShapeInformation  Other"
                ],
                [
                  "庫内温度帯情報  冷蔵",
                  "TemperatureRangeInformationForInsideTheCase  Refrigeration"
                ],
                [
                  "庫内温度帯情報  冷凍",
                  "TemperatureRangeInformationForInsideTheCase  Freezing"
                ],
                [
                  "庫内照明動作状態  入",
                  "InternalLightingOperationStatus  ON"
                ],
                [
                  "庫内照明動作状態  切",
                  "InternalLightingOperationStatus  OFF"
                ],
                [
                  "庫外照明動作状態  入",
                  "ExternalLightingOperationStatus  ON"
                ],
                [
                  "庫外照明動作状態  切",
                  "ExternalLightingOperationStatus  OFF"
                ],
                [
                  "コンプレッサ動作状態  入",
                  "CompressorOperationStatus  ON"
                ],
                [
                  "コンプレッサ動作状態  切",
                  "CompressorOperationStatus  OFF"
                ],
                [
                  "ヒーターモード  入",
                  "HeaterMode  ON"
                ],
                [
                  "ヒーターモード  切",
                  "HeaterMode  OFF"
                ],
                [
                  "庫内照明タイプ  蛍光灯",
                  "TypeOfLightingInsideTheShowcase  Fluorescent lights"
                ],
                [
                  "庫内照明タイプ  LED",
                  "TypeOfLightingInsideTheShowcase  LED"
                ],
                [
                  "庫内照明タイプ  照明無し",
                  "TypeOfLightingInsideTheShowcase  No lighting"
                ],
                [
                  "庫内照明タイプ  その他",
                  "TypeOfLightingInsideTheShowcase  Other"
                ],
                [
                  "庫外照明タイプ  蛍光灯",
                  "TypeOfLightingOutsideTheCase  Fluorescent lights"
                ],
                [
                  "庫外照明タイプ  LED",
                  "TypeOfLightingOutsideTheCase  LED"
                ],
                [
                  "庫外照明タイプ  照明無し",
                  "TypeOfLightingOutsideTheCase  No lighting"
                ],
                [
                  "庫外照明タイプ  その他",
                  "TypeOfLightingOutsideTheCase  Other"
                ]
              ]
            }
          ]
        },
        {
          "type": "WasherAndDryer",
          "message0": "洗濯乾燥機 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "WasherAndDryer",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "ONタイマ予約設定  入",
                  "OnTimerSetting  ON"
                ],
                [
                  "ONタイマ予約設定  切",
                  "OnTimerSetting  OFF"
                ],
                [
                  "扉・蓋開閉状態  開",
                  "DoorCoverOpenCloseStatus  Open"
                ],
                [
                  "扉・蓋開閉状態  閉",
                  "DoorCoverOpenCloseStatus  Close"
                ],
                [
                  "洗濯・乾燥設定  洗濯乾燥開始・再開／洗濯乾燥運転中",
                  "WasherAndDryerSetting  Start/restart or in progress"
                ],
                [
                  "洗濯・乾燥設定  洗濯乾燥一時停止",
                  "WasherAndDryerSetting  Suspend"
                ],
                [
                  "洗濯・乾燥設定  洗濯乾燥停止",
                  "WasherAndDryerSetting  Stop"
                ],
                [
                  "洗濯乾燥コース設定1  標準",
                  "WasherAndDryerCycleSetting1(note1)  Standard"
                ],
                [
                  "洗濯乾燥コース設定1  静音",
                  "WasherAndDryerCycleSetting1(note1)  silent"
                ],
                [
                  "洗濯乾燥コース設定1  汚れ大",
                  "WasherAndDryerCycleSetting1(note1)  heavily soiled clothes"
                ],
                [
                  "洗濯乾燥コース設定1  しつこい汚れ",
                  "WasherAndDryerCycleSetting1(note1)  hard-to-remove stains"
                ],
                [
                  "洗濯乾燥コース設定1  つけおき",
                  "WasherAndDryerCycleSetting1(note1)  presoaking"
                ],
                [
                  "洗濯乾燥コース設定1  毛布",
                  "WasherAndDryerCycleSetting1(note1)  blankets"
                ],
                [
                  "洗濯乾燥コース設定1  ソフト",
                  "WasherAndDryerCycleSetting1(note1)  soft"
                ],
                [
                  "洗濯乾燥コース設定1  ドライ",
                  "WasherAndDryerCycleSetting1(note1)  dry"
                ],
                [
                  "洗濯乾燥コース設定1  清潔すすぎ",
                  "WasherAndDryerCycleSetting1(note1)  clean rinsing"
                ],
                [
                  "洗濯乾燥コース設定1  アイロン／Yシャツ",
                  "WasherAndDryerCycleSetting1(note1)  ironing/business shirts"
                ],
                [
                  "洗濯乾燥コース設定1  吊り干し",
                  "WasherAndDryerCycleSetting1(note1)  hang drying"
                ],
                [
                  "洗濯乾燥コース設定1  厚物",
                  "WasherAndDryerCycleSetting1(note1)  thick clothes"
                ],
                [
                  "洗濯乾燥コース設定1  除菌",
                  "WasherAndDryerCycleSetting1(note1)  disinfection"
                ],
                [
                  "洗濯乾燥コース設定1  油汚れ",
                  "WasherAndDryerCycleSetting1(note1)  oil stains"
                ],
                [
                  "洗濯乾燥コース設定1  メモリー",
                  "WasherAndDryerCycleSetting1(note1)  memory"
                ],
                [
                  "洗濯乾燥コース設定1  省洗剤",
                  "WasherAndDryerCycleSetting1(note1)  detergent saving"
                ],
                [
                  "洗濯乾燥コース設定1  汚れ小",
                  "WasherAndDryerCycleSetting1(note1)  lightly soiled clothes"
                ],
                [
                  "洗濯乾燥コース設定1  少量短時間",
                  "WasherAndDryerCycleSetting1(note1)  quick wash of small amount of laundry"
                ],
                [
                  "洗濯乾燥コース設定1  標準",
                  "WasherAndDryerCycleSetting1(note1)  Standard"
                ],
                [
                  "洗濯乾燥コース設定1  静音",
                  "WasherAndDryerCycleSetting1(note1)  silent"
                ],
                [
                  "洗濯乾燥コース設定1  汚れ大",
                  "WasherAndDryerCycleSetting1(note1)  heavily soiled clothes"
                ],
                [
                  "洗濯乾燥コース設定1  しつこい汚れ",
                  "WasherAndDryerCycleSetting1(note1)  hard-to-remove stains"
                ],
                [
                  "洗濯乾燥コース設定1  つけおき",
                  "WasherAndDryerCycleSetting1(note1)  presoaking"
                ],
                [
                  "洗濯乾燥コース設定1  毛布",
                  "WasherAndDryerCycleSetting1(note1)  blankets"
                ],
                [
                  "洗濯乾燥コース設定1  ソフト",
                  "WasherAndDryerCycleSetting1(note1)  soft"
                ],
                [
                  "洗濯乾燥コース設定1  ドライ",
                  "WasherAndDryerCycleSetting1(note1)  dry"
                ],
                [
                  "洗濯乾燥コース設定1  清潔すすぎ",
                  "WasherAndDryerCycleSetting1(note1)  clean rinsing"
                ],
                [
                  "洗濯乾燥コース設定1  除菌",
                  "WasherAndDryerCycleSetting1(note1)  disinfection"
                ],
                [
                  "洗濯乾燥コース設定1  油汚れ",
                  "WasherAndDryerCycleSetting1(note1)  oil stains"
                ],
                [
                  "洗濯乾燥コース設定1  メモリー",
                  "WasherAndDryerCycleSetting1(note1)  memory"
                ],
                [
                  "洗濯乾燥コース設定1  省洗剤",
                  "WasherAndDryerCycleSetting1(note1)  detergent saving"
                ],
                [
                  "洗濯乾燥コース設定1  汚れ小",
                  "WasherAndDryerCycleSetting1(note1)  lightly soiled clothes"
                ],
                [
                  "洗濯乾燥コース設定1  少量短時間",
                  "WasherAndDryerCycleSetting1(note1)  quick wash of small amount of laundry"
                ],
                [
                  "洗濯乾燥コース設定1  槽洗浄",
                  "WasherAndDryerCycleSetting1(note1)  tank cleaning"
                ],
                [
                  "洗濯乾燥コース設定1  標準",
                  "WasherAndDryerCycleSetting1(note1)  Standard"
                ],
                [
                  "洗濯乾燥コース設定1  毛布",
                  "WasherAndDryerCycleSetting1(note1)  blankets"
                ],
                [
                  "洗濯乾燥コース設定1  ソフト",
                  "WasherAndDryerCycleSetting1(note1)  soft"
                ],
                [
                  "洗濯乾燥コース設定1  ドライ",
                  "WasherAndDryerCycleSetting1(note1)  dry"
                ],
                [
                  "洗濯乾燥コース設定1  アイロン／Yシャツ",
                  "WasherAndDryerCycleSetting1(note1)  ironing/business shirts"
                ],
                [
                  "洗濯乾燥コース設定1  吊り干し",
                  "WasherAndDryerCycleSetting1(note1)  hang drying"
                ],
                [
                  "洗濯乾燥コース設定1  厚物",
                  "WasherAndDryerCycleSetting1(note1)  thick clothes"
                ],
                [
                  "洗濯乾燥コース設定1  除菌",
                  "WasherAndDryerCycleSetting1(note1)  disinfection"
                ],
                [
                  "洗濯乾燥コース設定1  縮み低減",
                  "WasherAndDryerCycleSetting1(note1)  shrinkage minimization"
                ],
                [
                  "洗濯乾燥コース設定1  仕上げ",
                  "WasherAndDryerCycleSetting1(note1)  finishing"
                ],
                [
                  "洗濯乾燥コース設定1  静止乾燥",
                  "WasherAndDryerCycleSetting1(note1)  stationary drying"
                ],
                [
                  "洗濯乾燥コース設定1  時間指定",
                  "WasherAndDryerCycleSetting1(note1)  user definition of drying time"
                ],
                [
                  "洗濯乾燥コース設定1  衣類あたため",
                  "WasherAndDryerCycleSetting1(note1)  garment warming"
                ],
                [
                  "洗濯乾燥コース設定1  槽洗浄",
                  "WasherAndDryerCycleSetting1(note1)  tank cleaning"
                ],
                [
                  "洗濯乾燥コース設定2  洗濯なし",
                  "WasherAndDryerCycleSetting2(note1)  No washing"
                ],
                [
                  "洗濯乾燥コース設定2  標準",
                  "WasherAndDryerCycleSetting2(note1)  Standard"
                ],
                [
                  "洗濯乾燥コース設定2  静音",
                  "WasherAndDryerCycleSetting2(note1)  silent"
                ],
                [
                  "洗濯乾燥コース設定2  汚れ大",
                  "WasherAndDryerCycleSetting2(note1)  heavily soiled clothes"
                ],
                [
                  "洗濯乾燥コース設定2  しつこい汚れ",
                  "WasherAndDryerCycleSetting2(note1)  hard-to-remove stains"
                ],
                [
                  "洗濯乾燥コース設定2  つけおき",
                  "WasherAndDryerCycleSetting2(note1)  presoaking"
                ],
                [
                  "洗濯乾燥コース設定2  毛布",
                  "WasherAndDryerCycleSetting2(note1)  blankets"
                ],
                [
                  "洗濯乾燥コース設定2  ソフト",
                  "WasherAndDryerCycleSetting2(note1)  soft"
                ],
                [
                  "洗濯乾燥コース設定2  ドライ",
                  "WasherAndDryerCycleSetting2(note1)  dry"
                ],
                [
                  "洗濯乾燥コース設定2  清潔すすぎ",
                  "WasherAndDryerCycleSetting2(note1)  clean rinsing"
                ],
                [
                  "洗濯乾燥コース設定2  除菌",
                  "WasherAndDryerCycleSetting2(note1)  disinfection"
                ],
                [
                  "洗濯乾燥コース設定2  油汚れ",
                  "WasherAndDryerCycleSetting2(note1)  oil stains"
                ],
                [
                  "洗濯乾燥コース設定2  メモリー",
                  "WasherAndDryerCycleSetting2(note1)  memory"
                ],
                [
                  "洗濯乾燥コース設定2  省洗剤",
                  "WasherAndDryerCycleSetting2(note1)  detergent saving"
                ],
                [
                  "洗濯乾燥コース設定2  汚れ小",
                  "WasherAndDryerCycleSetting2(note1)  lightly soiled clothes"
                ],
                [
                  "洗濯乾燥コース設定2  少量短時間",
                  "WasherAndDryerCycleSetting2(note1)  quick wash of small amount of laundry"
                ],
                [
                  "洗濯乾燥コース設定2  槽洗浄",
                  "WasherAndDryerCycleSetting2(note1)  tank cleaning"
                ],
                [
                  "乾燥方法設定  乾燥なし",
                  "DryingCycleSetting(note1)  No drying"
                ],
                [
                  "乾燥方法設定  標準",
                  "DryingCycleSetting(note1)  Standard"
                ],
                [
                  "乾燥方法設定  毛布",
                  "DryingCycleSetting(note1)  blankets"
                ],
                [
                  "乾燥方法設定  ソフト",
                  "DryingCycleSetting(note1)  soft"
                ],
                [
                  "乾燥方法設定  ドライ",
                  "DryingCycleSetting(note1)  dry"
                ],
                [
                  "乾燥方法設定  アイロン／Yシャツ",
                  "DryingCycleSetting(note1)  ironing/business shirts"
                ],
                [
                  "乾燥方法設定  吊り干し",
                  "DryingCycleSetting(note1)  hang drying"
                ],
                [
                  "乾燥方法設定  厚物",
                  "DryingCycleSetting(note1)  thick clothes"
                ],
                [
                  "乾燥方法設定  除菌",
                  "DryingCycleSetting(note1)  disinfection"
                ],
                [
                  "乾燥方法設定  縮み低減",
                  "DryingCycleSetting(note1)  shrinkage minimization"
                ],
                [
                  "乾燥方法設定  仕上げ",
                  "DryingCycleSetting(note1)  finishing"
                ],
                [
                  "乾燥方法設定  静止乾燥",
                  "DryingCycleSetting(note1)  stationary drying"
                ],
                [
                  "乾燥方法設定  時間指定",
                  "DryingCycleSetting(note1)  user definition of drying time"
                ],
                [
                  "乾燥方法設定  衣類あたため",
                  "DryingCycleSetting(note1)  garment warming"
                ],
                [
                  "乾燥方法設定  ヒータ入力制限",
                  "DryingCycleSetting(note1)  heater current limit"
                ],
                [
                  "乾燥方法設定  槽洗浄",
                  "DryingCycleSetting(note1)  tank cleaning"
                ],
                [
                  "水流設定  自動",
                  "WaterFlowRateSetting  AUTO"
                ],
                [
                  "脱水回転数設定値  自動",
                  "RotationSpeedForSpinDryingSetting  AUTO"
                ],
                [
                  "乾燥度設定  自動",
                  "DegreeOfDryingSetting  AUTO"
                ],
                [
                  "つけおき行程時間設定値  自動",
                  "PresoakingTimeSetting  AUTO"
                ],
                [
                  "洗濯乾燥遷移状態  洗い",
                  "CurrentStageOfWasherAndDryerCycle  washing"
                ],
                [
                  "洗濯乾燥遷移状態  すすぎ",
                  "CurrentStageOfWasherAndDryerCycle  rinsing"
                ],
                [
                  "洗濯乾燥遷移状態  脱水",
                  "CurrentStageOfWasherAndDryerCycle  spin drying"
                ],
                [
                  "洗濯乾燥遷移状態  一時停止",
                  "CurrentStageOfWasherAndDryerCycle  suspended"
                ],
                [
                  "洗濯乾燥遷移状態  洗濯完了",
                  "CurrentStageOfWasherAndDryerCycle  washing completed"
                ],
                [
                  "洗濯乾燥遷移状態  洗濯／乾燥（ソフトキープなし）完了",
                  "CurrentStageOfWasherAndDryerCycle  washing/drying (without wrinkling minimization) completed"
                ],
                [
                  "洗濯乾燥遷移状態  乾燥",
                  "CurrentStageOfWasherAndDryerCycle  drying"
                ],
                [
                  "洗濯乾燥遷移状態  ソフトキープ",
                  "CurrentStageOfWasherAndDryerCycle  wrinkling minimization"
                ],
                [
                  "洗濯乾燥遷移状態  乾燥（ソフトキープあり）完了",
                  "CurrentStageOfWasherAndDryerCycle  drying (with wrinkling minimization) completed"
                ],
                [
                  "洗濯乾燥遷移状態  運転前待機中",
                  "CurrentStageOfWasherAndDryerCycle  standing by to start"
                ],
                [
                  "洗濯乾燥遷移状態  第１すすぎ",
                  "CurrentStageOfWasherAndDryerCycle  1st rinsing"
                ],
                [
                  "洗濯乾燥遷移状態  第２すすぎ",
                  "CurrentStageOfWasherAndDryerCycle  2nd rinsing"
                ],
                [
                  "洗濯乾燥遷移状態  第３すすぎ",
                  "CurrentStageOfWasherAndDryerCycle  3rd rinsing"
                ],
                [
                  "洗濯乾燥遷移状態  第４すすぎ",
                  "CurrentStageOfWasherAndDryerCycle  4th rinsing"
                ],
                [
                  "洗濯乾燥遷移状態  第５すすぎ",
                  "CurrentStageOfWasherAndDryerCycle  5th rinsing"
                ],
                [
                  "洗濯乾燥遷移状態  第６すすぎ",
                  "CurrentStageOfWasherAndDryerCycle  6th rinsing"
                ],
                [
                  "洗濯乾燥遷移状態  第７すすぎ",
                  "CurrentStageOfWasherAndDryerCycle  7th rinsing"
                ],
                [
                  "洗濯乾燥遷移状態  第８すすぎ",
                  "CurrentStageOfWasherAndDryerCycle  8th rinsing"
                ],
                [
                  "洗濯乾燥遷移状態  第１脱水",
                  "CurrentStageOfWasherAndDryerCycle  1st spin drying"
                ],
                [
                  "洗濯乾燥遷移状態  第２脱水",
                  "CurrentStageOfWasherAndDryerCycle  2nd spin drying"
                ],
                [
                  "洗濯乾燥遷移状態  第３脱水",
                  "CurrentStageOfWasherAndDryerCycle  3rd spin drying"
                ],
                [
                  "洗濯乾燥遷移状態  第４脱水",
                  "CurrentStageOfWasherAndDryerCycle  4th spin drying"
                ],
                [
                  "洗濯乾燥遷移状態  第５脱水",
                  "CurrentStageOfWasherAndDryerCycle  5th spin drying"
                ],
                [
                  "洗濯乾燥遷移状態  第６脱水",
                  "CurrentStageOfWasherAndDryerCycle  6th spin drying"
                ],
                [
                  "洗濯乾燥遷移状態  第７脱水",
                  "CurrentStageOfWasherAndDryerCycle  7th spin drying"
                ],
                [
                  "洗濯乾燥遷移状態  第８脱水",
                  "CurrentStageOfWasherAndDryerCycle  8th spin drying"
                ],
                [
                  "洗濯乾燥遷移状態  プリヒート脱水",
                  "CurrentStageOfWasherAndDryerCycle  Preheat spin drying"
                ],
                [
                  "水量設定1  自動",
                  "WaterVolumeSetting1  AUTO"
                ],
                [
                  "水量設定2  自動",
                  "WaterVolumeSetting2  AUTO"
                ],
                [
                  "洗い時間設定値  自動",
                  "WashingTimeSetting  AUTO"
                ],
                [
                  "すすぎ回数設定値  自動",
                  "NumberOfTimesOfRinsingSetting  AUTO"
                ],
                [
                  "脱水時間設定値  自動",
                  "SpinDryingTimeSetting  AUTO"
                ],
                [
                  "乾燥時間設定値  自動",
                  "DryingTimeSetting  AUTO"
                ],
                [
                  "風呂水設定  風呂水給水なし",
                  "BathtubWaterRecycleSetting  Bathtub water not used"
                ],
                [
                  "風呂水設定  洗いのみ",
                  "BathtubWaterRecycleSetting  Washing only"
                ],
                [
                  "風呂水設定  すすぎのみ",
                  "BathtubWaterRecycleSetting  Rinsing only(excluding the final rinsing)"
                ],
                [
                  "風呂水設定  全すすぎ",
                  "BathtubWaterRecycleSetting  All rinsing processes"
                ],
                [
                  "風呂水設定  洗い＋すすぎ（除く最終すすぎ）",
                  "BathtubWaterRecycleSetting  Washing + rinsing(excluding the final rinsing)"
                ],
                [
                  "風呂水設定  洗い＋全すすぎ",
                  "BathtubWaterRecycleSetting  Washing + all rinsing processes"
                ],
                [
                  "ソフトキープ設定  入",
                  "WrinklingMinimizationSetting  ON"
                ],
                [
                  "ソフトキープ設定  切",
                  "WrinklingMinimizationSetting  OFF"
                ],
                [
                  "運転中扉・蓋ロック設定  施錠",
                  "DoorCoverLockSetting  Lock"
                ],
                [
                  "運転中扉・蓋ロック設定  解錠",
                  "DoorCoverLockSetting  Unlock"
                ]
              ]
            }
          ]
        },
        {
          "type": "CommercialShowCaseOutdoorUnit",
          "message0": "業務用ショーケース向け室外機 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "CommercialShowCaseOutdoorUnit",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "特殊状態  通常",
                  "ExceptionalStatus  Normal"
                ],
                [
                  "特殊状態  除霜",
                  "ExceptionalStatus  Defrosting"
                ],
                [
                  "運転モード設定  冷却",
                  "OperationModeSetting  Cooling"
                ],
                [
                  "運転モード設定  非冷",
                  "OperationModeSetting  Non-cooling"
                ],
                [
                  "コンプレッサ動作状態  入",
                  "GroupInformation  ON"
                ],
                [
                  "コンプレッサ動作状態  切",
                  "GroupInformation  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "DishwasherAndDryer",
          "message0": "食器洗い乾燥機 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "DishwasherAndDryer",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "ONタイマ予約設定  入",
                  "OnTimerSetting  ON"
                ],
                [
                  "ONタイマ予約設定  切",
                  "OnTimerSetting  OFF"
                ],
                [
                  "ONタイマ時刻設定値  不明",
                  "OnTimerSetting(time)  Undefined"
                ],
                [
                  "扉・蓋開閉設定  開",
                  "DoorCoverOpenCloseSetting  Open"
                ],
                [
                  "扉・蓋開閉設定  閉",
                  "DoorCoverOpenCloseSetting  Close"
                ],
                [
                  "扉・蓋ロック設定  施錠",
                  "DoorCoverLockSetting  Lock"
                ],
                [
                  "扉・蓋ロック設定  解錠",
                  "DoorCoverLockSetting  Unlock"
                ],
                [
                  "運転状態設定  運転開始・再開/運転中",
                  "OperationStatusSetting  Start/restart(ed) or in progress"
                ],
                [
                  "運転状態設定  運転一時停止",
                  "OperationStatusSetting  Operation suspended"
                ],
                [
                  "運転状態設定  運転停止",
                  "OperationStatusSetting  Operation stopped"
                ],
                [
                  "洗浄方法設定  洗浄運転切",
                  "DishWashingMethodSetting  Dish-washing operation OFF"
                ],
                [
                  "洗浄方法設定  標準",
                  "DishWashingMethodSetting  Standard"
                ],
                [
                  "洗浄方法設定  静音",
                  "DishWashingMethodSetting  Silent"
                ],
                [
                  "洗浄方法設定  汚れ大",
                  "DishWashingMethodSetting  Heavily stained"
                ],
                [
                  "洗浄方法設定  しつこい汚れ",
                  "DishWashingMethodSetting  Hard-to-remove stains"
                ],
                [
                  "洗浄方法設定  ソフト",
                  "DishWashingMethodSetting  Soft"
                ],
                [
                  "洗浄方法設定  汚れ少",
                  "DishWashingMethodSetting  Lightly stained"
                ],
                [
                  "洗浄方法設定  少量短時間",
                  "DishWashingMethodSetting  Quick wash of small amount of laundry"
                ],
                [
                  "洗浄方法設定  すすぎのみ",
                  "DishWashingMethodSetting  Rinsing only"
                ],
                [
                  "洗浄方法設定  除菌",
                  "DishWashingMethodSetting  Disinfection"
                ],
                [
                  "洗浄方法設定  お手入れ",
                  "DishWashingMethodSetting  Maintenance"
                ],
                [
                  "乾燥方法設定  乾燥運転切",
                  "DryingCycleSetting  Drying operation OFF"
                ],
                [
                  "乾燥方法設定  最弱",
                  "DryingCycleSetting  Very low"
                ],
                [
                  "乾燥方法設定  弱",
                  "DryingCycleSetting  Low"
                ],
                [
                  "乾燥方法設定  標準",
                  "DryingCycleSetting  Standard"
                ],
                [
                  "乾燥方法設定  ソフト",
                  "DryingCycleSetting  Soft"
                ],
                [
                  "乾燥方法設定  強",
                  "DryingCycleSetting  High"
                ],
                [
                  "乾燥方法設定  最強",
                  "DryingCycleSetting  Very high"
                ],
                [
                  "乾燥方法設定  時間指定",
                  "DryingCycleSetting  User definition of drying time"
                ],
                [
                  "乾燥方法設定  乾燥のみ",
                  "DryingCycleSetting  Drying only"
                ],
                [
                  "乾燥方法設定  庫内乾燥",
                  "DryingCycleSetting  Drying inside"
                ],
                [
                  "保管方法設定  保管運転切",
                  "StoringMethodSetting  Storing operation OFF"
                ],
                [
                  "保管方法設定  送風",
                  "StoringMethodSetting  Blowing"
                ],
                [
                  "保管方法設定  除湿",
                  "StoringMethodSetting  Dehumidification"
                ],
                [
                  "保管方法設定  除菌",
                  "StoringMethodSetting  Disinfection"
                ],
                [
                  "予洗い時間設定値  自動",
                  "PrewashingTimeSetting  AUTO"
                ],
                [
                  "予洗い最高水温設定値  熱水不使用",
                  "HighestWaterTemperatureSettingForPrewashing  Not to use warm water"
                ],
                [
                  "予洗い最高水温設定値  自動",
                  "HighestWaterTemperatureSettingForPrewashing  AUTO"
                ],
                [
                  "本洗い時間設定値  自動",
                  "WashingTimeSetting  AUTO"
                ],
                [
                  "本洗い最高水温設定値  熱水不使用",
                  "HighestWaterTemperatureSettingForWashing  Not to use warm water"
                ],
                [
                  "本洗い最高水温設定値  自動",
                  "HighestWaterTemperatureSettingForWashing  AUTO"
                ],
                [
                  "すすぎ回数設定値  自動",
                  "NumberOfTimesOfRinsingSetting  AUTO"
                ],
                [
                  "熱水すすぎ最高水温設定値  熱水不使用",
                  "HighestWaterTemperatureSettingForHotWaterRinsing  Not to use warm water"
                ],
                [
                  "熱水すすぎ最高水温設定値  自動",
                  "HighestWaterTemperatureSettingForHotWaterRinsing  AUTO"
                ],
                [
                  "洗浄水量設定  自動",
                  "DishWashingWaterVolumeSetting  AUTO"
                ],
                [
                  "洗浄水圧設定  自動",
                  "DishWashingWaterPressureSetting  AUTO"
                ],
                [
                  "洗浄度設定  自動",
                  "DishWashingLevelSetting  AUTO"
                ],
                [
                  "乾燥時間設定値  自動",
                  "DryingTimeSetting  AUTO"
                ],
                [
                  "熱風乾燥最高気温設定値  熱水不使用",
                  "HighestAirTemperatureSettingForHotAirDrying  Not to use warm water"
                ],
                [
                  "熱風乾燥最高気温設定値  自動",
                  "HighestAirTemperatureSettingForHotAirDrying  AUTO"
                ],
                [
                  "乾燥風量設定  自動",
                  "DryingAirFlowRateSetting  AUTO"
                ],
                [
                  "乾燥度設定  自動",
                  "DryingLevelSetting  AUTO"
                ],
                [
                  "運転遷移状態  運転開始前",
                  "OperationTransitionStatus  Before starting operation"
                ],
                [
                  "運転遷移状態  運転前",
                  "OperationTransitionStatus  Before operation"
                ],
                [
                  "運転遷移状態  ON タイマ待機中",
                  "OperationTransitionStatus  ON timer standing by"
                ],
                [
                  "運転遷移状態  洗浄中",
                  "OperationTransitionStatus  Dish-washing ongoing"
                ],
                [
                  "運転遷移状態  予洗い中",
                  "OperationTransitionStatus  Prewashing ongoing"
                ],
                [
                  "運転遷移状態  本洗い中",
                  "OperationTransitionStatus  Washing ongoing"
                ],
                [
                  "運転遷移状態  すすぎ中",
                  "OperationTransitionStatus  Rinsing ongoing"
                ],
                [
                  "運転遷移状態  洗浄一時停止",
                  "OperationTransitionStatus  Dish-washing suspended"
                ],
                [
                  "運転遷移状態  乾燥中",
                  "OperationTransitionStatus  Drying ongoing"
                ],
                [
                  "運転遷移状態  熱風乾燥中",
                  "OperationTransitionStatus  Hot air drying ongoing"
                ],
                [
                  "運転遷移状態  風乾燥中",
                  "OperationTransitionStatus  Air drying ongoing"
                ],
                [
                  "運転遷移状態  乾燥一時停止",
                  "OperationTransitionStatus  Drying suspended"
                ],
                [
                  "運転遷移状態  保管中",
                  "OperationTransitionStatus  Storing ongoing"
                ],
                [
                  "運転遷移状態  送風中",
                  "OperationTransitionStatus  Blowing ongoing"
                ],
                [
                  "運転遷移状態  除湿中",
                  "OperationTransitionStatus  Dehumidification ongoing"
                ],
                [
                  "運転遷移状態  除菌中",
                  "OperationTransitionStatus  Disinfection ongoing"
                ],
                [
                  "運転遷移状態  保管一時停止",
                  "OperationTransitionStatus  Storing suspended"
                ],
                [
                  "運転遷移状態  運転完了",
                  "OperationTransitionStatus  Operation completed"
                ],
                [
                  "運転遷移状態  第１すすぎ",
                  "OperationTransitionStatus  1st rinsing"
                ],
                [
                  "運転遷移状態  第２すすぎ",
                  "OperationTransitionStatus  2nd rinsing"
                ],
                [
                  "運転遷移状態  第３すすぎ",
                  "OperationTransitionStatus  3rd rinsing"
                ],
                [
                  "運転遷移状態  第４すすぎ",
                  "OperationTransitionStatus  4th rinsing"
                ],
                [
                  "運転遷移状態  第５すすぎ",
                  "OperationTransitionStatus  5th rinsing"
                ],
                [
                  "運転遷移状態  第６すすぎ",
                  "OperationTransitionStatus  6th rinsing"
                ],
                [
                  "運転遷移状態  第７すすぎ",
                  "OperationTransitionStatus  7th rinsing"
                ],
                [
                  "運転遷移状態  第８すすぎ",
                  "OperationTransitionStatus  8th rinsing"
                ],
                [
                  "運転遷移状態  状態不明",
                  "OperationTransitionStatus  Unknown status"
                ],
                [
                  "ON タイマ残り時間  不明",
                  "RemainingTimeOnTheOnTimer  Undefined"
                ],
                [
                  "予洗い残り時間  不明",
                  "RemainingTimeOfPrewashing  Undefined"
                ],
                [
                  "本洗い残り時間  不明",
                  "RemainingTimeOfWashing  Undefined"
                ],
                [
                  "すすぎ残り時間  不明",
                  "RemainingTimeForRinsing  Undefined"
                ],
                [
                  "洗浄残り時間  不明",
                  "RemainingTimeOfDishWashing  Undefined"
                ],
                [
                  "乾燥残り時間  不明",
                  "RemainingDryingTime  Undefined"
                ],
                [
                  "洗乾残り時間  不明",
                  "RemainingTimeOfWashingAndDrying  Undefined"
                ],
                [
                  "使用水量  不明",
                  "UsedWaterVolume  Undefined"
                ]
              ]
            }
          ]
        },
        {
          "type": "WeighingMachine",
          "message0": "体重計 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "WeighingMachine",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "ParallelProcessingCombinationTypePowerControl",
          "message0": "並列処理併用型電力制御 %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "ParallelProcessingCombinationTypePowerControl",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "DrEventController",
          "message0": "DRイベントコントローラ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "DrEventController",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "DR プログラムタイプ  CPP",
                  "DrProgramType  CPP"
                ],
                [
                  "DR プログラムタイプ  PTR",
                  "DrProgramType  PTR"
                ],
                [
                  "DR プログラムタイプ  電力使用制限",
                  "DrProgramType  Power use limit"
                ],
                [
                  "DR プログラムタイプ  発電電力制限",
                  "DrProgramType  Power generation limit"
                ],
                [
                  "DR プログラムタイプ  でんき予報",
                  "DrProgramType  Electricity forecast"
                ],
                [
                  "DR プログラムタイプ  DLC",
                  "DrProgramType  DLC"
                ],
                [
                  "DR プログラムタイプ  レベル指定",
                  "DrProgramType  Level designation"
                ]
              ]
            }
          ]
        },
        {
          "type": "Switch(supportingJemAHaTerminals)",
          "message0": "スイッチ (JEM_A/HA端子対応) %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "Switch(supportingJemAHaTerminals)",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "Controller",
          "message0": "コントローラ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "Controller",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "接続状態  接続中",
                  "ConnectionStatus  Connected"
                ],
                [
                  "接続状態  離脱中",
                  "ConnectionStatus  Disconnected"
                ],
                [
                  "接続状態  未登録",
                  "ConnectionStatus  Not registered"
                ],
                [
                  "接続状態  削除",
                  "ConnectionStatus  Deleted"
                ]
              ]
            }
          ]
        },
        {
          "type": "Display",
          "message0": "ディスプレイ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "Display",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "表示制御設定  表示",
                  "DisplayControlSetting  Displaying enabled"
                ],
                [
                  "表示制御設定  非表示",
                  "DisplayControlSetting  Displaying disabled"
                ],
                [
                  "文字列設定受付可能状態  Ready",
                  "CharacterStringSettingAcceptanceStatus  Ready"
                ],
                [
                  "文字列設定受付可能状態  Busy",
                  "CharacterStringSettingAcceptanceStatus  Busy"
                ]
              ]
            }
          ]
        },
        {
          "type": "Television",
          "message0": "テレビ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "Television",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "表示制御設定  表示",
                  "DisplayControlSetting  Displaying enabled"
                ],
                [
                  "表示制御設定  非表示",
                  "DisplayControlSetting  Displaying disabled"
                ],
                [
                  "文字列設定受付可能状態  Ready",
                  "CharacterStringSettingAcceptanceStatus  Ready"
                ],
                [
                  "文字列設定受付可能状態  Busy",
                  "CharacterStringSettingAcceptanceStatus  Busy"
                ]
              ]
            }
          ]
        },
        {
          "type": "Audio",
          "message0": "オーディオ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "Audio",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "ミュート設定  入",
                  "MuteSetting  ON"
                ],
                [
                  "ミュート設定  切",
                  "MuteSetting  OFF"
                ]
              ]
            }
          ]
        },
        {
          "type": "NetworkCamera",
          "message0": "ネットワークカメラ %1",
          "output": null,
          "colour": 230,
          "args0": [
            {
              "type": "field_dropdown",
              "name": "NetworkCamera",
              "options": [
                [
                  "動作状態 入",
                  "OperatingStatus  ON"
                ],
                [
                  "動作状態 切",
                  "OperatingStatus  OFF"
                ],
                [
                  "静止画撮影設定受付可能状態  Ready",
                  "StillImagePhotographySettingAcceptanceStatus  Ready"
                ],
                [
                  "静止画撮影設定受付可能状態  Busy",
                  "StillImagePhotographySettingAcceptanceStatus  Busy"
                ],
                [
                  "静止画撮影設定  撮影",
                  "StillImagePhotographySetting  Shoot"
                ]
              ]
            }
          ]
        }
      ]
      
);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "illuminance_sensor",
    "message0": "照度センサ %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
          [
            "照度計測値",
            "Illuminance value"
          ]
        ]
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "general_lighting_number",
    "message0": "一般照明 %1 %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
          [
            "照度計測値",
            "illuminance value"
          ],
          [
            "照度レベル段数",
            "Brightness level step setting"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }
]);

Blockly.Blocks['set'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("プロパティ設定");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.defineBlocksWithJsonArray([
  {
    "type": "trigger_action",
    "message0": "条件 %1 プロパティ設定 %2",
    "args0": [
      {
        "type": "input_value",
        "name": "trigger"
      },
      {
        "type": "input_value",
        "name": "action"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "memo",
    "message0": "メモ \" %1 \"",
    "args0": [
      {
        "type": "field_input",
        "name": "text",
        "text": "テキスト"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_TEXTS_HUE}",
    "tooltip": "",
    "helpUrl": ""
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "time",
    "message0": "%1 : %2 %3 %4",
    "args0": [
      {
        "type": "field_input",
        "name": "hour",
        "text": "0"
      },
      {
        "type": "field_input",
        "name": "minute",
        "text": "0"
      },
      {
        "type": "field_dropdown",
        "name": "APM",
        "options": [
          [
            "午前",
            "AM"
          ],
          [
            "午後",
            "PM"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "period",
    "message0": "%1 : %2 から %3 : %4 まで %5 ",
    "args0": [
      {
        "type": "field_input",
        "name": "time1",
        "text": "0"
      },
      {
        "type": "field_input",
        "name": "time2",
        "text": "0"
      },
      {
        "type": "field_input",
        "name": "time3",
        "text": "0"
      },
      {
        "type": "field_input",
        "name": "time4",
        "text": "0"
      },
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "timer",
    "message0": "%1 時 %2 分 後",
    "args0": [
      {
        "type": "field_input",
        "name": "hour",
        "text": "0"
      },
      {
        "type": "field_input",
        "name": "minute",
        "text": "0"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "weeks",
    "message0": "%1 から %2 まで",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "week1",
        "options": [
          [
            "日",
            "SUN"
          ],
          [
            "月",
            "MON"
          ],
          [
            "火",
            "TUE"
          ],
          [
            "水",
            "WED"
          ],
          [
            "木",
            "THU"
          ],
          [
            "金",
            "FRI"
          ],
          [
            "土",
            "SAT"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "week2",
        "options": [
          [
            "日",
            "SUN"
          ],
          [
            "月",
            "MON"
          ],
          [
            "火",
            "TUE"
          ],
          [
            "水",
            "WED"
          ],
          [
            "木",
            "THU"
          ],
          [
            "金",
            "FRI"
          ],
          [
            "土",
            "SAT"
          ]
        ]
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "week",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "week1",
        "options": [
          [
            "日",
            "SUN"
          ],
          [
            "月",
            "MON"
          ],
          [
            "火",
            "TUE"
          ],
          [
            "水",
            "WED"
          ],
          [
            "木",
            "THU"
          ],
          [
            "金",
            "FRI"
          ],
          [
            "土",
            "SAT"
          ]
        ]
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }
]);