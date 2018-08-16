# minor-iib

ESQL
https://www.ibm.com/support/knowledgecenter/en/SSMKHH_9.0.0/com.ibm.etools.mft.doc/ak04861_.htm

---- 

# Approach
```
$ db2 create db mpt       # to creaet database "MPT"
$ db2                     # to get db2 shell
db2 => .....              # now we can put in db2 commands 
```


```
create table dev.m_location( rvl__id int not null, rvl__name varchar(100), rvl__site_number varchar(50), rvl__location_email varchar(100), rvl__email varchar(100), rvl__address_id int, rvl__latitude float, rvl__longitude float, rvl__line1 varchar(255), rvl__line2 varchar(255), rvl__district varchar(255), rvl__province varchar(255), rvl__zipcode varchar(10), tnd__id int, tnd__datastream_id int, constraint pk_rvl_id primary key(rvl__id))
```

```
create unique index ind_location_info on dev.m_location(rvl__id) include (rvl__name, rvl__site_number, tnd__id, tnd__datastream_id) 
```



```
db2 => create table _m_store_management(rvl__id int, name varchar(100), site_number varchar(50), location_email varchar(100), address_id int, latitude float, longitude float, line1 varchar(255), line2 varchar(255), district varchar(255), province varchar(255), zipcode varchar(10))
```

```
create unique index ind_locaiton_mgmt on dev.m_location(rvl__id) include (rvl__name, rvl__site_number, tnd__id, tnd__datastream_id) 
```



## _M_STORE_CLOCKINOUT
```
db2 => create table _m_store_management( \
establishment_id integer, \ 
name varchar(100), \
site_number varchar(50), \
location_email varchar(100), \
address_id integer, \
latitude float, \
longitude, \
line1 varchar(255), \
line2 varchar(255), \
district varchar(255), \
province varchar(255), \
zipcode(10))
```



curl -k --request POST  --url https://staging.tanda.co/api/v2/datastreams   --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer 979d2ef336bf3c2fa7163f99046cd7cb9c3912ce9115abac4c3b44b6d890ae1d'   --data '{"name":"TPC_sales","data_interval":900}'

curl -X GET --header "API-AUTHENTICATION: e70010c670c34ed1be518fcc81c52794:7339f22109fa4f5bab65c4221df3f05bbcbe1cf562914c329d11dd2d21342195" https://minor-demo.revelup.com/resources/TimeSheetEntry/?format=json
> https://minor-demo.revelup.com/resources/TimeSheetEntry/?format=json&establishment=1&employee=2&created_date
> https://minor-demo.revelup.com/resources/TimeSheetEntry/?format=json&establishment=1

# Data
> curl -k --url https://staging.tanda.co/api/v2/users --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer 979d2ef336bf3c2fa7163f99046cd7cb9c3912ce9115abac4c3b44b6d890ae1d'
> curl -k --url https://staging.tanda.co/api/v2/locations --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer 979d2ef336bf3c2fa7163f99046cd7cb9c3912ce9115abac4c3b44b6d890ae1d'


# Schedule
1. GET Schedule from Tanda ( If checking on U, it is a shift. If on the API, it is a schedule)
> curl -k -G -X GET --header 'accept: application/json' --header 'content-type: application/json' --header 'Authorization: bearer 979d2ef336bf3c2fa7163f99046cd7cb9c3912ce9115abac4c3b44b6d890ae1d' -d user_ids=638361 -d from=2018-08-13 -d to=2018-08-17 https://staging.tanda.co/api/v2/schedules 
> *NOTE* FROM = TODAY(sync weekly), TO = FROM+7d

2. Prepare data
3. POST Revel a schedule
> curl -k -G -X POST --header 'accept: application/json' --header 'content-type: application/json' --header 'API-AUTHENTICATION: e70010c670c34ed1be518fcc81c52794:7339f22109fa4f5bab65c4221df3f05bbcbe1cf562914c329d11dd2d21342195' --data '{"created_date":"2018-08-13T01:00:00", "updated_date":"2018-08-13T01:00:00", "shift_begin_time":"", "shift_end_time":"", "created_by":"/enterprise/User/6/", "updated_by":"/enterprise/User/6/", "department": "", "role":"", employee: "", "establishment":"",  "resource_uri":"", "stage":""}' https://minor-demo.revelup.com/resources/TimeSchedule

#1
curl -k -G -X POST --header 'accept: application/json' --header 'content-type: application/json' --header 'API-AUTHENTICATION: e70010c670c34ed1be518fcc81c52794:7339f22109fa4f5bab65c4221df3f05bbcbe1cf562914c329d11dd2d21342195' --data '{"created_date":"2018-08-13T01:00:00", "updated_date":"2018-08-13T01:00:00", "shift_begin_time":"1534125600", "shift_end_time":"1534158000", "created_by":"/enterprise/User/6/", "updated_by":"/enterprise/User/6/", "department": "", "role":"", employee: "", "establishment":"",  "resource_uri":"", "stage":""}' https://minor-demo.revelup.com/resources/TimeSchedule



#### Report ####
1. GET Live report from Revel ()
2. Prepare data
{"time":timestamp, "stat": xxx, "type":"sales"}
{"time":timestamp, "stat": xxx, "type":"transaction"}
3. POST Sales to Tanda (/storestats/for_datastream/ds_id) (https://staging.tanda.co/api/v2#store-stats-create-store-stats-for-datastream-post)
4. POST Transaction to Tanda (/storestats/for_datastream/ds_id) (https://staging.tanda.co/api/v2#store-stats-create-store-stats-for-datastream-post)

> https://minor-demo.revelup.com/reports/hourly_sales/json/?posstation=&employee=&show_unpaid=1&show_irregular=1%20&range_from=2016-08-01+02:00&range_to=2016-08-02+02:00&establishment=1&format=json










# Worklog
1. GET Timesheet from Revel
2. 
3. 
4. POST Transaction to Tanda
