
# Mapping Table

## M_LOCATION

| Revel                | Tanda     |
| -------------------- | --------- |
| est_id               | loc_id |
| est_address_id            |     |
| est_address_lat     |     |
| est_address_lng  |     |
| est_name           |     |
| f_status           |     |

## M_ROLE

| Revel                | Tanda     |
| -------------------- | --------- |
| role_id           | team_id |
| est_id            |         |
| f_status         |          |

## M_EMPLOYEE

| Revel                | Tanda     |
| -------------------- | --------- |
| emp_id           | staff_id |
| role_id           |          |
| est_id            |         |
| f_status         |          |

## M_STORE_STAT (Revenue, Transaction)

| Revel                | 
| -------------------- | 
| loc_id          | 
| ds_id            | 
| join_id            | 
| type            | 
| stat            | 
| currentdate         | 
| f_status         | 


## M_WORKLOG (Clock in/out)

| Revel                | 
| -------------------- | 
| loc_id          | 
| emp_id            | 
| clockin            | 
| clockout            | 
| previousdate         | 
| currentdate         | 
| f_status         | 
