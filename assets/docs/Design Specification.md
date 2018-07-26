# Introduction

![alt text][solution_overview]
Some introductory information

# Integration Overview
## FSR Transformation (No Delivery) #phase-1
### Store Management (Revel - Tanda)
![Revel - Tanda][revel_tanda_component_integration]

### Payroll Integration
![Tanda - Humanica][tanda_humanica_component_integration]

### New Staffs Integration
![Smart Career - Revel][smartcareer_revel_component_integration]

### Account Generation
![Revel - mSchool][revel_mschool_component_integration]


## DEMCO/XX Transformation
### SDM --> OMS
### Revel --> OMS
## Live Transformation

# Technical Specification
## Revel-Tanda

### Interface Overview
![Revel - Tanda Diagram][revel_tanda_wiring_diagram]

### Entity Relationship - Revel
![Revel ER][revel_er]

### Entity Relationship - Tanda
![Tanda ER][tanda_er]


### Location

#### Process Mapping
![Revel - Tanda Diagram][map_process_location_revel_tanda]
#### Field Mapping
![Revel - Tanda Diagram][map_field_location_revel_tanda]


### Department

#### Process Mapping
![Revel - Tanda Diagram][map_process_team_revel_tanda]
#### Field Mapping
![Revel - Tanda Diagram][map_field_team_revel_tanda]

### User

#### Process Mapping
![Revel - Tanda Diagram][map_process_user_revel_tanda]
#### Field Mapping
![Revel - Tanda Diagram][map_field_user_revel_tanda]

### Location
```
GET https://minor-demo.revelup.com/resources/Address/?format=json
POST https://my.tanda.co/api/v2/locations
POST https://staging.tanda.co/api/v2/locations
```

```
contact name: PZ-1111 Avani Riverside
site number: 
address line1:
address line2: 
email: xxxxxxx@minor.com (revel id)
```

```
database = db2
```

| Revel Field | Type      | Constraint | Computation Logic | Tanda Field | Type      | Constraint |
| ----------- | --------- | ---------- | ----------------- | ----------- | --------- | ---------- |
| **id**      | Integer   | Unique     |                   |             |           |            |
| uuid        | UUID      |            |                   |             |           |            |
| country     | String    |            | concat(contry)    | address     | String    |            |
| province    | String    |            | concat(province)  |             |           |            |
| city_name   | String    |            | concat(city_name) |             |           |            |
| district    | String    |            | concat(district)  |             |           |            |
| zipcode     | String    |            | concat(zipcode)   |             |           |            |
| latitude    | Float     |            |                   | latitude    | Float     |            |
| longitude   | Float     |            |                   | longitude   | Float     |            |
| active      | Boolean   |            |                   |             |           |            |
| alias       | String    |            |                   | name        | String    |            |
|             |           |            | substring(0,1).toUpperCase() | short_name  |           |            |
| building_number | String    |            |                   |             |           |            |
| created_date    | Datetime  |            |                   |             |           |            |
| ########### | ######### | ########## | ################# | ########### | ######### | ########## |
|             |           |            |                   | specific_holiday_dates    | DateRange     | Ignore        |


### Team/Department
```
curl -x GET https://minor-demo.revelup.com/resources/Address/?format=json

```
| Revel Field | Type      | Constraint | Computation Logic | Tanda Field | Type      | Constraint |
| ----------- | --------- | ---------- | ----------------- | ----------- | --------- | ---------- |
| **id**      | Integer   | Unique     |                   |             |           |            |
| uuid        | UUID      |            |                   |             |           |            |
| country     | String    |            | concat(contry)    | address     | String    |            |
| province    | String    |            | concat(province)  |             |           |            |
| city_name   | String    |            | concat(city_name) |             |           |            |
| district    | String    |            | concat(district)  |             |           |            |
| zipcode     | String    |            | concat(zipcode)   |             |           |            |
| latitude    | Float     |            |                   | latitude    | Float     |            |
| longitude   | Float     |            |                   | longitude   | Float     |            |
| active      | Boolean   |            |                   |             |           |            |
| alias       | String    |            |                   | name        | String    |            |
|             |           |            | substring(0,1).toUpperCase() | short_name  |           |            |
| building_number | String    |            |                   |             |           |            |
| created_date    | Datetime  |            |                   |             |           |            |
| ########### | ######### | ########## | ################# | ########### | ######### | ########## |
|             |           |            |                   | specific_holiday_dates    | DateRange     |            |


### User
```
curl -x GET https://minor-demo.revelup.com/resources/Address/?format=json
```
| Revel Field | Type      | Constraint | Computation Logic | Tanda Field | Type      | Constraint |
| ----------- | --------- | ---------- | ----------------- | ----------- | --------- | ---------- |
| **id**      | Integer   | Unique     |                   |             |           |            |
| uuid        | UUID      |            |                   |             |           |            |
| country     | String    |            | concat(contry)    | address     | String    |            |
| province    | String    |            | concat(province)  |             |           |            |
| city_name   | String    |            | concat(city_name) |             |           |            |
| district    | String    |            | concat(district)  |             |           |            |
| zipcode     | String    |            | concat(zipcode)   |             |           |            |
| latitude    | Float     |            |                   | latitude    | Float     |            |
| longitude   | Float     |            |                   | longitude   | Float     |            |
| active      | Boolean   |            |                   |             |           |            |
| alias       | String    |            |                   | name        | String    |            |
|             |           |            | substring(0,1).toUpperCase() | short_name  |           |            |
| building_number | String    |            |                   |             |           |            |
| created_date    | Datetime  |            |                   |             |           |            |
| ########### | ######### | ########## | ################# | ########### | ######### | ########## |
|             |           |            |                   | specific_holiday_dates    | DateRange     |            |



# Appendix-A: Mapping Specification
## Revel-Sterling
![Revel - Sterling Diagram][revel_sterling_mapping]


# Appendix-B: Lookup and Datastore
  ## aa
  ## bb


[solution_overview]: https://www.lucidchart.com/publicSegments/view/e1391c4a-f9fe-4374-a876-0c9352342e06/image.png "Solution Overview"

[revel_tanda_component_integration]: https://www.lucidchart.com/publicSegments/view/6aa90135-4840-4faf-b845-cbce73e8077f/image.png "High Level Integraion of Revel and Tanda"

[tanda_humanica_component_integration]: https://www.lucidchart.com/publicSegments/view/216ddd53-f3c6-4d22-9ec6-c258e7c71ad4/image.png "High Level Integraion of Tanda and Humanica"

[smartcareer_revel_component_integration]: https://www.lucidchart.com/publicSegments/view/68fdfc1b-8c58-49cb-9796-5b2105e3826d/image.png "High Level Integraion of Smart Career and Revel"

[revel_mschool_component_integration]: https://www.lucidchart.com/publicSegments/view/39c4437f-7686-4096-95e5-fab928f8a3b0/image.png "High Level Integraion of Revel and mSchool"

[revel_tanda_wiring_diagram]: https://www.lucidchart.com/publicSegments/view/a4ededd4-8869-4a3c-bb02-f23f99679d1d/image.png "Wiring Diagram - Revel and Tanda"

[revel_sterling_mapping]: https://www.lucidchart.com/publicSegments/view/2bf05a7d-2414-4636-a695-e492e2bb08c8/image.png "Mapping Specification - Revel and Sterling"


[tanda_er]: https://www.lucidchart.com/publicSegments/view/e10aefe2-49a1-4db6-80d2-11947b9b9bef/image.png "Entity Relationship - Tanda"

[revel_er]: https://www.lucidchart.com/publicSegments/view/50f85f85-681d-4840-a138-3e91d7a2fe60/image.png "Entity Relationship - Revel"


[map_process_location_revel_tanda]: https://www.lucidchart.com/publicSegments/view/b80b91d4-fca3-435f-a359-5e03ea00e8d3/image.png "Process Mapping - Location (Revel to Tanda)"

[map_field_location_revel_tanda]: https://www.lucidchart.com/publicSegments/view/4b437fa5-35e5-4247-8837-0373ed0a7a9e/image.png "Field Mapping - Location (Revel to Tanda)"

[map_process_team_revel_tanda]: https://www.lucidchart.com/publicSegments/view/40df4279-0d2d-45fd-acb8-983cdbebd6e5/image.png "Process Mapping - Team (Revel to Tanda)"

[map_field_team_revel_tanda]: https://www.lucidchart.com/publicSegments/view/844088a1-b360-48e6-8b15-f1625e2f4223/image.png "Field Mapping - Team (Revel to Tanda)"

[map_process_user_revel_tanda]: https://www.lucidchart.com/publicSegments/view/da524f98-65ad-4da9-bb5e-960e94e85d5e/image.png "Process Mapping - User (Revel to Tanda)"

[map_field_user_revel_tanda]: https://www.lucidchart.com/publicSegments/view/74fcdda3-fa5a-4ae6-a2bc-a15a764396bf/image.png "Field Mapping - User (Revel to Tanda)"

[map_process_manager_revel_tanda]: https://www.lucidchart.com/publicSegments/view/da524f98-65ad-4da9-bb5e-960e94e85d5e/image.png "Process Mapping - Manager (Revel to Tanda)"

[map_field_manager_revel_tanda]: https://www.lucidchart.com/publicSegments/view/5b460e9a-68d9-44d3-9446-ab29d8b0b12d/image.png "Field Mapping - Manager (Revel to Tanda)"