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
![Revel - Tanda Diagram][revel_tanda_wiring_diagram]

### Location
```
GET https://minor-demo.revelup.com/resources/Address/?format=json
POST https://my.tanda.co/api/v2/locations
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




### Team/Department
```
curl -x GET https://minor-demo.revelup.com/resources/Address/?format=json
```

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

### User


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


