# Credential
```
url:  https://staging.tanda.co/dashboard
user: thanapir@metrosystems.co.th
pass: P@ssw0rdmsc

https://staging.tanda.co/api/oauth/access_tokens



my.tanda.co
bearer 11186091004ca29ca5cb063fdb6a6bfe458759749269d6a6bd8c5ceef1c02324

```

curl -k --url https://my.tanda.co/api/v2/locations   --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer 11186091004ca29ca5cb063fdb6a6bfe458759749269d6a6bd8c5ceef1c02324'

curl -k --url https://my.tanda.co/api/v2/datastreams   --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer 11186091004ca29ca5cb063fdb6a6bfe458759749269d6a6bd8c5ceef1c02324'


curl -k --url https://staging.tanda.co/api/v2/datastreams   --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer 979d2ef336bf3c2fa7163f99046cd7cb9c3912ce9115abac4c3b44b6d890ae1d'

curl -k --url https://staging.tanda.co/api/v2/datastreams   --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer 979d2ef336bf3c2fa7163f99046cd7cb9c3912ce9115abac4c3b44b6d890ae1d'


curl -k --request POST  --url https://my.tanda.co/api/v2/datastreams   --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer 11186091004ca29ca5cb063fdb6a6bfe458759749269d6a6bd8c5ceef1c02324'   --data '{"name":"TPC_sales","data_interval":900}'


curl -k --request POST  --url https://minor-demo.revelup.com/resources/TimeSchedule/?format=json --header 'accept: application/json'   --header 'content-type: application/json'   --header 'API-AUTHENTICATION: e70010c670c34ed1be518fcc81c52794:7339f22109fa4f5bab65c4221df3f05bbcbe1cf562914c329d11dd2d21342195'   --data '{"updated_date":"TPC_sales","updated_by":"", "shift_end_time"}'


# 3333
curl -k --url https://staging.tanda.co/api/v2/datastreams/115178   --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer 979d2ef336bf3c2fa7163f99046cd7cb9c3912ce9115abac4c3b44b6d890ae1d'

curl -k --request DELETE --url https://staging.tanda.co/api/v2/datastreams/115202  --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer 979d2ef336bf3c2fa7163f99046cd7cb9c3912ce9115abac4c3b44b6d890ae1d' 

# 333

# Locations 
```
curl --header "Authorization: bearer 8b948cd56c9df2deb3ee678b688f560beb87dd695eba68ff1ca3c08c87b44121" \
https://staging.tanda.co/api/v2/locations
```

curl --header "Authorization: bearer 8b948cd56c9df2deb3ee678b688f560beb87dd695eba68ff1ca3c08c87b44121" \
https://staging.tanda.co/api/v2/award_templates

curl --header "Authorization: bearer 8b948cd56c9df2deb3ee678b688f560beb87dd695eba68ff1ca3c08c87b44121" \
https://staging.tanda.co/api/v2/award_templates/available

curl -X POST --header "Authorization: bearer 8b948cd56c9df2deb3ee678b688f560beb87dd695eba68ff1ca3c08c87b44121" --header "Content-Type: application/json" -d '{"award_template_id": 10}' https://staging.tanda.co/api/v2/award_templates 


curl --header "Authorization: bearer 8b948cd56c9df2deb3ee678b688f560beb87dd695eba68ff1ca3c08c87b44121" \
https://staging.tanda.co/api/v2/award_tags




# User
```
curl --header "Authorization: bearer 8b948cd56c9df2deb3ee678b688f560beb87dd695eba68ff1ca3c08c87b44121" \
https://staging.tanda.co/api/v2/users/me

curl --header "Authorization: bearer 8b948cd56c9df2deb3ee678b688f560beb87dd695eba68ff1ca3c08c87b44121" \
https://staging.tanda.co/api/v2/users?show_wages=true
```

# Departments
```
GET https://staging.tanda.co/api/v2/departments/111
```

# Data Stream each store 
```
1 data stream per store location 
ex. "sales-store1", "sales-store2"
```

## Clock in
> https://minor-demo.revelup.com/resources/TimeSheetEntry/?format=json&establishment=1&created_date__range=2013-03-07T12:00:00,2013-03-08T12:00:00

> https://minor-demo.revelup.com/resources/TimeSheetEntry/?format=json&establishment=1&created_date__range=2013-03-07T12:00:00,2013-03-08T12:00:00&employee=12

## Clock out

curl --header "Authorization: bearer 8b948cd56c9df2deb3ee678b688f560beb87dd695eba68ff1ca3c08c87b44121"  https://staging.tanda.co/api/v2/schedules?user_ids=638361&from=2018-08-12&to=2018-08-13&show_costs=true&include_names=false



GET https://my.tanda.co/api/v2/schedules?user_ids=1,2,123456&from=2016-03-02&to=2016-03-02&show_costs=true&include_names=false



# TEST API
1. check location
curl -k --url https://staging.tanda.co/api/v2/locations   --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer aa74ac08049dc9d6ab366558e03cec91a42598bf5c217876829f768b9fd062e4'

2. create location 
curl -k --request POST  --url https://staging.tanda.co/api/v2/departments   --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer aa74ac08049dc9d6ab366558e03cec91a42598bf5c217876829f768b9fd062e4'   --data '{"name":"Test","export_name":"","location_id":77245,"colour": "#FFFFFF"}'

3. check department
curl -k --url https://staging.tanda.co/api/v2/departments   --header 'accept: application/json' --header 'Authorization: bearer aa74ac08049dc9d6ab366558e03cec91a42598bf5c217876829f768b9fd062e4'

4. create department

curl -k --request POST  --url https://staging.tanda.co/api/v2/departments   --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer aa74ac08049dc9d6ab366558e03cec91a42598bf5c217876829f768b9fd062e4'   --data '{"name":"Test","export_name":"","location_id":77245,"colour": "#FFFFFF"}'

curl -k --url https://staging.tanda.co/api/v2/datastreams   --header 'accept: application/json' --header 'Authorization: bearer aa74ac08049dc9d6ab366558e03cec91a42598bf5c217876829f768b9fd062e4'



# Table
  sid integer not null GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1)
  ,sname varchar(30)
  ,PRIMARY KEY (sid)

create table M_DATASTREAMJOIN(
  sid integer not null GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
  ds_id integer, 
  dsp_id integer, 
  dsp_type varchar(50), 
  dj_id integer, 
)

create table M_DATASTREAM(
  sid integer not null GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
  loc_id integer, 
  ds_id integer, 
  ds_type varchar(50), 
  dsp_id integer, 
  dsp_type varchar(50), 
  dj_id integer, 
  stat float,
  updated_time timestamp,
  primary key(sid)
)

1. location[] = get M_LOCATION
2. POST https://my.tanda.co/api/v2/datastreams
{ "name": "location_name_sales", "data_interval": 900 } --> id:1
{ "name": "location_name_transaction", "data_interval": 900 } --> id:2
3. insert id:1, id:2 into M_STORESTAT
4. 
POST https://my.tanda.co/api/v2/datastreamjoins
{ "data_stream_id": 1, "data_streamable_type": "Organisation" } --> id: 101
{ "data_stream_id": 2, "data_streamable_type": "Organisation" } --> id: 102
5. insert id:101, id:102 into M_STORESTAT



GET https://my.tanda.co/api/v2/datastreams
[
  {
    "id": 24,
    "name": "Reactor Revenue",
    "source": "generic",
    "data_interval": 900,
    "print_mode": "hidden",
    "roster_display_mode": "values"
  },
  {
    "id": 25,
    "name": "User Entered: Springfield Powerplant",
    "source": "user_entered",
    "data_interval": 86400,
    "print_mode": "hidden",
    "roster_display_mode": "values"
  },
  {
    "id": 26,
    "name": "Reactor Revenue (Retail Express)",
    "source": "retail_express",
    "section_identifier": "11223344",
    "data_interval": 900,
    "print_mode": "hidden",
    "roster_display_mode": "values"
  }
]

curl -k --request POST --url https://staging.tanda.co/api/v2/datastreams --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer 68ac9af521950d5e3cd6f9581c2efe55f95493ffbae780ec5ab28fcb43d5d337' --data '{"name": "staging_68922_ds","data_interval":900}'


POST https://my.tanda.co/api/v2/datastreams
-->
{
  "name": "My Special Data",
  "data_interval": 900
}
<--
{
  "id": 1069,
  "name": "My Special Data",
  "source": "api",
  "data_interval": 900,
  "print_mode": "hidden",
  "roster_display_mode": "values"
}

GET https://my.tanda.co/api/v2/datastreamjoins
[
  {
    "id": 162,
    "data_stream_id": 24,
    "data_streamable_id": 111,
    "data_streamable_type": "Department",
    "rostering_ratio": 1.175
  }
]

POST https://my.tanda.co/api/v2/datastreamjoins
-->
{
  "data_stream_id": 24,
  "data_streamable_type": "Organisation"
}
<--
{
  "id": 162,
  "data_stream_id": 24,
  "data_streamable_id": null,
  "data_streamable_type": "Organisation",
  "rostering_ratio": 1.175
}




select * from Database.MINORDB.db2inst1.M_STORESTAT where dsp_type = '';



curl -k --request POST  --url https://minor-demo.revelup.com/resources/TimeSchedule/?format=json --header 'accept: application/json'   --header 'content-type: application/json'   --header 'API-AUTHENTICATION: e70010c670c34ed1be518fcc81c52794:7339f22109fa4f5bab65c4221df3f05bbcbe1cf562914c329d11dd2d21342195'   --data '{"updated_date":"TPC_sales","updated_by":"", "shift_end_time"}'