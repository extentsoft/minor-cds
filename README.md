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

CREATE TABLE test_log(id integer not null generated always as identity (start with 1, increment by 1), txt varchar(500), primary key (id))


# Data Definition Language (DDL)

## Configuration 

### Credentials
> CREATE TABLE db2inst1.C_CREDENTIALS(id integer not null generated always as identity (start with 1, increment by 1), system_code varchar(5), system_key varchar(100), system_id VARCHAR(100), system_secret VARCHAR(100), system_token varchar(100), updated_date timestamp, primary key (id))
```
INSERT INTO db2inst1.C_CREDENTIALS(system_code,system_key,updated_date) VALUES('RVLD1','e70010c670c34ed1be518fcc81c52794:7339f22109fa4f5bab65c4221df3f05bbcbe1cf562914c329d11dd2d21342195', CURRENT TIMESTAMP )
INSERT INTO db2inst1.C_CREDENTIALS(system_code,system_key,updated_date) VALUES('TNDD1','bearer fa97d5fdafaec48f2daf8a41cb9b04ff8eb536b4871ed49e3518326b09d66106', CURRENT TIMESTAMP )
```

### Environment
> CREATE TABLE db2inst1.C_ENVIRONMENT(id integer not null generated always as identity (start with 1, increment by 1), system_name varchar(20), description varchar(50), refcode VARCHAR(5), flag SMALLINT, updated_date timestamp, primary key (id))
```
insert into db2inst1.c_environment(system_name,description,refcode,flag,updated_date) values('Revel','Development','RVLD1',1,CURRENT TIMESTAMP)
insert into db2inst1.c_environment(system_name,description,refcode,flag,updated_date) values('Revel','Development','RVLD2',0,CURRENT TIMESTAMP)
insert into db2inst1.c_environment(system_name,description,refcode,flag,updated_date) values('Revel','SIT','RVLS1',0,CURRENT TIMESTAMP)
insert into db2inst1.c_environment(system_name,description,refcode,flag,updated_date) values('Revel','UAT','RVLU1',0,CURRENT TIMESTAMP)
insert into db2inst1.c_environment(system_name,description,refcode,flag,updated_date) values('Revel','Preproduction','RVLV1',0,CURRENT TIMESTAMP)
insert into db2inst1.c_environment(system_name,description,refcode,flag,updated_date) values('Revel','Production','RVLP1',0,CURRENT TIMESTAMP)
insert into db2inst1.c_environment(system_name,description,refcode,flag,updated_date) values('Revel','Live','RVLL1',0,CURRENT TIMESTAMP)
------
insert into db2inst1.c_environment(system_name,description,refcode,flag,updated_date) values('Tanda','Development','TNDD1',1,CURRENT TIMESTAMP)
insert into db2inst1.c_environment(system_name,description,refcode,flag,updated_date) values('Tanda','Development','TNDD2',0,CURRENT TIMESTAMP)
insert into db2inst1.c_environment(system_name,description,refcode,flag,updated_date) values('Tanda','SIT','TNDS1',0,CURRENT TIMESTAMP)
insert into db2inst1.c_environment(system_name,description,refcode,flag,updated_date) values('Tanda','UAT','TNDU1',0,CURRENT TIMESTAMP)
insert into db2inst1.c_environment(system_name,description,refcode,flag,updated_date) values('Tanda','Preproduction','TNDV1',0,CURRENT TIMESTAMP)
insert into db2inst1.c_environment(system_name,description,refcode,flag,updated_date) values('Tanda','Production','TNDP1',0,CURRENT TIMESTAMP)
insert into db2inst1.c_environment(system_name,description,refcode,flag,updated_date) values('Tanda','Live','TNDL1',0,CURRENT TIMESTAMP)
----
select cc.system_key, cc.system_id, cc.system_secret from c_credentials as cc inner join c_environment as ce on cc.system_code = ce.refcode where ce.system_name='Revel' and ce.flag=1
```

## Schedule 
> CREATE TABLE M_SCHEDULE(id integer not null generated always as identity(start with 1 increment by 1), est_id integer, role_id integer, emp_id integer, created_date timestamp, primary key (id))


## Worklog - Clockin/Clockout
> CREATE TABLE db2inst1.TMP_Worklog(id integer not null generated always as identity(start with 1 increment by 1), resource_uri_employee VARCHAR(100), resource_uri_establishment VARCHAR(100), clock_in timestamp, clock_out timestamp, created_date timestamp, updated_date timestamp, flag VARCHAR(1) with default '1', primary key (id))

> CREATE TABLE db2inst1.M_Worklog(id integer not null generated always as identity(start with 1 increment by 1), resource_uri_employee VARCHAR(100), resource_uri_establishment VARCHAR(100), clock_in timestamp, clock_out timestamp, created_date timestamp, updated_date timestamp, flag VARCHAR(1) with default '1', primary key (id))

## Mapping Table 

> CREATE TABLE db2inst1.M_ROLE(id VARCHAR(50),name VARCHAR(50),location_id VARCHAR(50),export_name VARCHAR(50),colour VARCHAR(50) with default '#FFFFFF',resource_uri_role VARCHAR(100),resource_uri_est VARCHAR(100),flag VARCHAR(1) with default '1')

> CREATE TABLE db2inst1.TMP_Worklog(id integer not null generated always as integer(start with 1 increment by 1), resource_uri_employee VARCHAR(100), resource_uri_establishment VARCHAR(100), clock_in timestamp, clock_out timestamp, created_date timestamp, updated_date timestamp, flag VARCHAR(1) with default '1', primary key (id))




sid integer not null GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1)
  ,sname varchar(30)
  ,PRIMARY KEY (sid)


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

curl -X GET --header "API-AUTHENTICATION: e70010c670c34ed1be518fcc81c52794:7339f22109fa4f5bab65c4221df3f05bbcbe1cf562914c329d11dd2d21342195" https://minor-demo.revelup.com/enterprise/TimeSheetEntry/?format=json


curl -X GET --header "API-AUTHENTICATION: e70010c670c34ed1be518fcc81c52794:7339f22109fa4f5bab65c4221df3f05bbcbe1cf562914c329d11dd2d21342195" https://minor-demo.revelup.com/resources/TimeSheetEntry/?establishment=13&employee=3956&format=json


curl -X GET --header "API-AUTHENTICATION: e70010c670c34ed1be518fcc81c52794:7339f22109fa4f5bab65c4221df3f05bbcbe1cf562914c329d11dd2d21342195" https://minor-demo.revelup.com/resources/TimeSheetEntry/?format=json


curl -X GET --header "API-AUTHENTICATION: 1b602ba1ed114c609a8ac95443bd7955:caa245662e1f406685dfcbbcb8554e054579f10b6fae45678630e4beb2f3cfe4" https://pz-th-prd.revelup.com/resources/TimeSheetEntry/?format=json





> https://minor-demo.revelup.com/resources/TimeSheetEntry/?format=json&establishment=1&employee=2&created_date
> https://minor-demo.revelup.com/resources/TimeSheetEntry/?format=json&establishment=1

# Data
> curl -k --url https://staging.tanda.co/api/v2/users --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer 979d2ef336bf3c2fa7163f99046cd7cb9c3912ce9115abac4c3b44b6d890ae1d'
> curl -k --url https://staging.tanda.co/api/v2/locations --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer 979d2ef336bf3c2fa7163f99046cd7cb9c3912ce9115abac4c3b44b6d890ae1d'




# Schedule
1. GET Schedule from Tanda ( If checking on U, it is a shift. If on the API, it is a schedule)
> curl -k -G -X GET --header 'accept: application/json' --header 'content-type: application/json' --header 'Authorization: bearer fa97d5fdafaec48f2daf8a41cb9b04ff8eb536b4871ed49e3518326b09d66106' -d user_ids=638361 -d from=2018-08-13 -d to=2018-08-17 https://staging.tanda.co/api/v2/schedules 
> *NOTE* FROM = TODAY(sync weekly), TO = FROM+7d

2. Prepare data
3. POST Revel a schedule
> curl -k -G -X POST --header 'accept: application/json' --header 'content-type: application/json' --header 'API-AUTHENTICATION: e70010c670c34ed1be518fcc81c52794:7339f22109fa4f5bab65c4221df3f05bbcbe1cf562914c329d11dd2d21342195' --data '{"created_date":"2018-09-01T01:00:00", "updated_date":"2018-09-01T01:00:00", "shift_begin_time":"", "shift_end_time":"", "created_by":"/enterprise/User/6/", "updated_by":"/enterprise/User/6/", "department": "", "role":"", employee: "", "establishment":"",  "resource_uri":"", "stage":""}' https://minor-demo.revelup.com/resources/TimeSchedule

#1
curl -k -G -X POST --header 'accept: application/json' --header 'content-type: application/json' --header 'API-AUTHENTICATION: e70010c670c34ed1be518fcc81c52794:7339f22109fa4f5bab65c4221df3f05bbcbe1cf562914c329d11dd2d21342195' --data '{"created_date":"2018-09-01T01:00:00", "updated_date":"2018-09-01T01:00:00", "shift_begin_time":"1534125600", "shift_end_time":"1534158000", "created_by":"/enterprise/User/6/", "updated_by":"/enterprise/User/6/", "department": "", "role":"", employee: "", "establishment":"",  "resource_uri":"", "stage":""}' https://minor-demo.revelup.com/resources/TimeSchedule



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



{  
   "revenue_centers":[  ],
   "out_of_range":[  ],
   "quarters":[  ],
   "hours":[  ],
   "invalid":[  ],
   "groups":[  ],
   "total":{  },
   "online_orders_options":{  },
   "unpaid_orders":[  ],
   "employees":[  ],
   "pclasses":[  ],
   "posstations":[  ],
   "open_orders":[  ]
}





curl -X GET --header "API-AUTHENTICATION: e70010c670c34ed1be518fcc81c52794:7339f22109fa4f5bab65c4221df3f05bbcbe1cf562914c329d11dd2d21342195" https://minor-demo.revelup.com/resources/TimeSheetEntry/?establishment=13&employee=3956&format=json


curl -X GET --header "API-AUTHENTICATION: e70010c670c34ed1be518fcc81c52794:7339f22109fa4f5bab65c4221df3f05bbcbe1cf562914c329d11dd2d21342195" https://minor-demo.revelup.com/resources/TimeSheetEntry/?establishment=13&employee=3957&format=json








curl -k --url https://staging.tanda.co/api/v2/users?show_wages=true --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer 919b9571e0263c879564a5e8e4d71e65b24abd71b55fd8d96b7aaf4b53f69c15' 

curl -k --request POST --url https://staging.tanda.co/api/v2/clockins --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer 919b9571e0263c879564a5e8e4d71e65b24abd71b55fd8d96b7aaf4b53f69c15' --data '{"user_id": 657723,"type":"clockin","time":1534685995}'


curl -k --url https://staging.tanda.co/api/v2/rosters/388338 --header 'accept: application/json' --header 'content-type: application/json' --header 'Authorization: bearer 919b9571e0263c879564a5e8e4d71e65b24abd71b55fd8d96b7aaf4b53f69c15'

curl -k --url https://staging.tanda.co/api/v2/rosters/current --header 'accept: application/json' --header 'content-type: application/json' --header 'Authorization: bearer e03efdba48b47b724064fa7777128eefcffd95411fc0d87c89bbc2e08e390ed3'




https://my.tanda.co/api/v2/rosters/current






curl -v -H "Content-type: application/json" -H "API-AUTHENTICATION: e70010c670c34ed1be518fcc81c52794:7339f22109fa4f5bab65c4221df3f05bbcbe1cf562914c329d11dd2d21342195" -X POST -d '{"break_type": null, "created_by": "/enterprise/User/6/", "created_date": "2018-08-13T15:30:15.068664", "updated_by": "/enterprise/User/6/", "updated_date": "2018-08-13T15:30:15.068664","stage": 0, "establishment": "/enterprise/Establishment/15/", "department": "/resources/Department/2/", "role": "/resources/Role/2/", "employee": "/resources/Employee/3963/","shift_begin_time": "2018-08-14T01:00:00","shift_end_time": "2018-08-14T17:00:00"}' https://minor-demo.revelup.com/resources/TimeSchedule/

```
current_timestamp - epoch_origin_timestamp = epoch_timestamp --> second(epoch_timestamp) = epoch in integer
# current_timestamp = epoch in integer
```

SELECT MR.RESOURCE_URI_EST, MR.RESOURCE_URI_ROLE, ME.RESOURCE_URI FROM M_EMPLOYEE AS ME, M_ROLE AS MR WHERE ME.ID_DEPARTMENT = MR.ID where ME.id = 657723


SELECT MR.RESOURCE_URI_EST, MR.RESOURCE_URI_ROLE, ME.RESOURCE_URI FROM M_EMPLOYEE AS ME, M_ROLE AS MR WHERE ME.ID_DEPARTMENT = MR.ID AND ME.ID = '657723' AND ME.ID_DEPARTMENT = '177292'


===================

curl -v -H "Content-type: application/json" -H "API-AUTHENTICATION: e70010c670c34ed1be518fcc81c52794:7339f22109fa4f5bab65c4221df3f05bbcbe1cf562914c329d11dd2d21342195" -X POST -d '{"break_type": null, "created_by": "/enterprise/User/6/", "created_date": "2018-08-13T15:30:15.068664", "updated_by": "/enterprise/User/6/", "updated_date": "2018-08-13T15:30:15.068664","stage": 0, "establishment": "/enterprise/Establishment/15/", "department": "/resources/Department/2/", "role": "/resources/Role/2/", "employee": "/resources/Employee/3963/","shift_begin_time": "2018-08-14T01:00:00","shift_end_time": "2018-08-14T17:00:00"}' https://minor-demo.revelup.com/resources/TimeSchedule/

<Data>
<department>/resources/Department/2/</department>
<created_by>/enterprise/User/6/</created_by>
<updated_by>/enterprise/User/6/</updated_by>
<stage>0</stage>
<shift_begin_time>2018-08-13T09:00:00</shift_begin_time>
<shift_end_time>2018-08-13T12:00:00</shift_end_time>
<updated_date>2018-08-17T15:47:58</updated_date>
<created_date>2018-08-17T15:47:58</created_date>
<establishment>/enterprise/Establishment/15/</establishment>
<role>/resources/Role/12/</role>
<employee>/resources/Employee/3963/</employee>
</Data>
</JSON>
</message>

curl -v -H "Content-type: application/json" -H "API-AUTHENTICATION: e70010c670c34ed1be518fcc81c52794:7339f22109fa4f5bab65c4221df3f05bbcbe1cf562914c329d11dd2d21342195" -X POST -d '{ "created_by": "/enterprise/User/6/", "created_date": "2018-08-17T15:47:58", "updated_by": "/enterprise/User/6/", "updated_date": "2018-08-17T15:47:58","stage": 0, "establishment": "/enterprise/Establishment/15/", "department": "/resources/Department/2/", "role": "/resources/Role/12/", "employee": "/resources/Employee/3963/","shift_begin_time": "2018-08-18T09:00:00","shift_end_time": "2018-08-18T12:00:00"}' https://minor-demo.revelup.com/resources/TimeSchedule/

<department>/resources/Department/2/</department>
<created_by>/enterprise/User/6/</created_by>
<updated_by>/enterprise/User/6/</updated_by>
<stage>0</stage>
<shift_begin_time>2018-08-13T09:00:00</shift_begin_time>
<shift_end_time>2018-08-13T12:00:00</shift_end_time>
<updated_date>2018-08-17T15:47:58</updated_date>
<created_date>2018-08-17T15:47:58</created_date>
<establishment>/enterprise/Establishment/15/</establishment>
<role>/resources/Role/12/</role>
<employee>/resources/Employee/3963/</employee>





SET rvl_resource.Item[] = (
  SELECT MR.RESOURCE_URI_EST AS ESTID, MR.RESOURCE_URI_ROLE AS ROLEID, ME.RESOURCE_URI AS EMPID 
  FROM 
    Database.MINORDB.db2inst1.M_EMPLOYEE AS ME, 
    Database.MINORDB.db2inst1.M_ROLE AS MR 
  WHERE 
    ME.ID_DEPARTMENT = MR.ID 
    AND ME.ID = InputRoot.JSON.Data.schedules.Item[i].schedules.Item[j].user_id 
    AND ME.ID_DEPARTMENT = InputRoot.JSON.Data.schedules.Item[i].schedules.Item[j].department_id);
				
SELECT MR.RESOURCE_URI_EST AS ESTID, MR.RESOURCE_URI_ROLE AS ROLEID, ME.RESOURCE_URI AS EMPID, ME.ID_DEPARTMENT, ME.ID FROM M_EMPLOYEE AS ME, M_ROLE AS MR WHERE ME.ID_DEPARTMENT = MR.ID AND ME.ID = '657723' AND ME.ID_DEPARTMENT = '177292'

SELECT MR.RESOURCE_URI_EST AS ESTID, MR.RESOURCE_URI_ROLE AS ROLEID, ME.RESOURCE_URI AS EMPID, ME.ID_DEPARTMENT, ME.ID FROM M_EMPLOYEE AS ME, M_ROLE AS MR WHERE ME.ID_DEPARTMENT = MR.ID AND ME.ID = '657723'




<JSON>
<Data>
<department>/resources/Department/2/</department>
<created_by>/enterprise/User/2/</created_by>
<updated_by>/enterprise/User/2/</updated_by>
<stage>0</stage>
<created_date>2018-08-13</created_date>
<shift_begin_time>2018-08-13 09:00:00</shift_begin_time>
<shift_end_time>2018-08-13 12:00:00</shift_end_time>
<updated_date>2018-08-17 15:47:58</updated_date>
<establishment>/enterprise/Establishment/15/</establishment>
<role>/resources/Role/12/</role>
<employee>/resources/Employee/3963/</employee>
</Data>
</JSON>





==============

<JSON>
<Data>
<id>388338</id>
<schedules>
<Item>
<date>2018-08-13</date>
<schedules>
<Item>
<id>39746911</id>
<roster_id>388338</roster_id>
<user_id>657723</user_id>
<start>1534125600</start>
<finish>1534136400</finish>
<breaks/>
<automatic_break_length>0</automatic_break_length>
<department_id>177292</department_id>
<shift_detail_id/>
<last_published_at>1534495678</last_published_at>
<updated_at>1534495678</updated_at>
</Item>
<Item>
<id>39746912</id>
<roster_id>388338</roster_id>
<user_id>657725</user_id>
<start>1534140000</start>
<finish>1534168800</finish>
<breaks/>
<automatic_break_length>30</automatic_break_length>
<department_id>177295</department_id>
<shift_detail_id/>
<last_published_at/>
<updated_at>1534479267</updated_at>
</Item>
</schedules>
</Item>
<Item>
<date>2018-08-14</date>
<schedules>
<Item>
<id>39747245</id>
<roster_id>388338</roster_id>
<user_id>657723</user_id>
<start>1534208400</start>
<finish>1534251600</finish>
<breaks/>
<automatic_break_length>30</automatic_break_length>
<department_id>177292</department_id>
<shift_detail_id/>
<last_published_at>1534495678</last_published_at>
<updated_at>1534495678</updated_at>
</Item>
<Item>
<id>39747244</id>
<roster_id>388338</roster_id>
<user_id>644723</user_id>
<start/>
<finish/>
<breaks/>
<automatic_break_length/>
<department_id/>
<shift_detail_id/>
<last_published_at/>
<updated_at>1534495596</updated_at>
</Item>
</schedules>
</Item>
<Item>
<date>2018-08-18</date>
<schedules>
<Item>
<id>39747246</id>
<roster_id>388338</roster_id>
<user_id>657723</user_id>
<start>1534557600</start>
<finish>1534568400</finish>
<breaks/>
<automatic_break_length>0</automatic_break_length>
<department_id>177292</department_id>
<shift_detail_id/>
<last_published_at>1534495678</last_published_at>
<updated_at>1534495678</updated_at>
</Item>
</schedules>
</Item>
</schedules>
<start>2018-08-13</start>
<finish>2018-08-19</finish>
<updated_at>1534479202</updated_at>
</Data>
</JSON>
</message>



# Query 
select name,resource_uri_est,id_adr,location_id from m_location
select id,name, resource_uri_role from m_role where id is not null

SELECT MR.RESOURCE_URI_EST AS ESTID, MR.RESOURCE_URI_ROLE AS ROLEID, ME.RESOURCE_URI AS EMPID, ME.ID_DEPARTMENT, ME.ID FROM M_EMPLOYEE AS ME, M_ROLE AS MR WHERE ME.ID_DEPARTMENT = MR.ID AND ME.ID = '657974' AND ME.ID_DEPARTMENT = '177323'

------------


{"id":388337,"schedules":[{"date":"2018-08-20","schedules":[{"id":39747486,"roster_id":388337,"user_id":657973,"start":1534755600,"finish":1534780800,"breaks":[],"automatic_break_length":30,"department_id":177325,"shift_detail_id":null,"last_published_at":1534760409,"updated_at":1534760409},{"id":39747485,"roster_id":388337,"user_id":657972,"start":1534730400,"finish":1534759200,"breaks":[],"automatic_break_length":30,"department_id":177324,"shift_detail_id":null,"last_published_at":1534760409,"updated_at":1534760409}]},{"date":"2018-08-21","schedules":[{"id":39747487,"roster_id":388337,"user_id":657972,"start":1534816800,"finish":1534845600,"breaks":[],"automatic_break_length":30,"department_id":177324,"shift_detail_id":null,"last_published_at":1534760409,"updated_at":1534760409},{"id":39747488,"roster_id":388337,"user_id":657973,"start":1534842000,"finish":1534867200,"breaks":[],"automatic_break_length":30,"department_id":177325,"shift_detail_id":null,"last_published_at":1534760409,"updated_at":1534760409}]},{"date":"2018-08-22","schedules":[{"id":39747489,"roster_id":388337,"user_id":657972,"start":1534903200,"finish":1534932000,"breaks":[],"automatic_break_length":30,"department_id":177324,"shift_detail_id":null,"last_published_at":1534760409,"updated_at":1534760409},{"id":39747499,"roster_id":388337,"user_id":657974,"start":1534928400,"finish":1534953600,"breaks":[],"automatic_break_length":30,"department_id":177323,"shift_detail_id":null,"last_published_at":1534760409,"updated_at":1534760409}]},{"date":"2018-08-23","schedules":[{"id":39747491,"roster_id":388337,"user_id":657972,"start":1534975200,"finish":1535000400,"breaks":[],"automatic_break_length":30,"department_id":177324,"shift_detail_id":null,"last_published_at":1534760409,"updated_at":1534760409},{"id":39747492,"roster_id":388337,"user_id":657973,"start":1535000400,"finish":1535022000,"breaks":[],"automatic_break_length":30,"department_id":177325,"shift_detail_id":null,"last_published_at":1534760409,"updated_at":1534760409},{"id":39747493,"roster_id":388337,"user_id":657974,"start":1535018400,"finish":1535040000,"breaks":[],"automatic_break_length":30,"department_id":177323,"shift_detail_id":null,"last_published_at":1534760409,"updated_at":1534760409}]},{"date":"2018-08-24","schedules":[{"id":39747495,"roster_id":388337,"user_id":657973,"start":1535076000,"finish":1535104800,"breaks":[],"automatic_break_length":30,"department_id":177325,"shift_detail_id":null,"last_published_at":1534760409,"updated_at":1534760409},{"id":39747496,"roster_id":388337,"user_id":657974,"start":1535101200,"finish":1535126400,"breaks":[],"automatic_break_length":30,"department_id":177323,"shift_detail_id":null,"last_published_at":1534760409,"updated_at":1534760409}]},{"date":"2018-08-25","schedules":[{"id":39747498,"roster_id":388337,"user_id":657974,"start":1535187600,"finish":1535212800,"breaks":[],"automatic_break_length":30,"department_id":177323,"shift_detail_id":null,"last_published_at":1534760409,"updated_at":1534760409},{"id":39747497,"roster_id":388337,"user_id":657973,"start":1535162400,"finish":1535191200,"breaks":[],"automatic_break_length":30,"department_id":177325,"shift_detail_id":null,"last_published_at":1534760409,"updated_at":1534760409}]},{"date":"2018-08-26","schedules":[{"id":39747500,"roster_id":388337,"user_id":657972,"start":1535245200,"finish":1535295600,"breaks":[],"automatic_break_length":30,"department_id":177324,"shift_detail_id":null,"last_published_at":1534760409,"updated_at":1534760409}]}],"start":"2018-08-20","finish":"2018-08-26","updated_at":1534478212}


---------
[1]
{"meta": {"limit": 0, "offset": 0, "time_zone": "Asia/Bangkok", "total_count": 1}, "objects": [{"break_length": null, "break_type": null, "clock_in": "2018-08-20T09:00:00", "clock_out": null, "created_by": "/enterprise/User/213/", "created_date": "2018-08-20T17:31:07.637840", "department_name": "Service Crew", "employee": "/resources/Employee/3964/", "establishment": "/enterprise/Establishment/15/", "id": 1829, "is_auto_clock_out": null, "parent": "/resources/TimeSheetEntry/1829/", "resource_uri": "/resources/TimeSheetEntry/1829/", "returned_date": null, "role_name": "Cashier", "role_wage": 0.0, "stage": 0, "updated_by": "/enterprise/User/213/", "updated_date": "2018-08-20T17:31:07.637966"}]}
[2]
{"meta": {"limit": 0, "offset": 0, "time_zone": "Asia/Bangkok", "total_count": 2}, "objects": [
  {"break_length": null, "break_type": null, "clock_in": "2018-08-20T09:00:00", "clock_out": "2018-08-20T17:38:00", "created_by": "/enterprise/User/213/", "created_date": "2018-08-20T17:31:07.637840", "department_name": "Service Crew", "employee": "/resources/Employee/3964/", "establishment": "/enterprise/Establishment/15/", "id": 1829, "is_auto_clock_out": null, "parent": "/resources/TimeSheetEntry/1829/", "resource_uri": "/resources/TimeSheetEntry/1829/", "returned_date": null, "role_name": "Cashier", "role_wage": 0.0, "stage": 0, "updated_by": "/enterprise/User/213/", "updated_date": "2018-08-20T17:39:00.149863"}, 
  
  {"break_length": null, "break_type": null, "clock_in": "2018-08-20T17:15:00", "clock_out": null, "created_by": "/enterprise/User/213/", "created_date": "2018-08-20T17:38:48.176423", "department_name": "Service Crew", "employee": "/resources/Employee/3965/", "establishment": "/enterprise/Establishment/15/", "id": 1830, "is_auto_clock_out": null, "parent": "/resources/TimeSheetEntry/1830/", "resource_uri": "/resources/TimeSheetEntry/1830/", "returned_date": null, "role_name": "Cook", "role_wage": 0.0, "stage": 0, "updated_by": "/enterprise/User/213/", "updated_date": "2018-08-20T17:38:48.176497"}]}

<time>1534730400</time>





curl -X GET --header "API-AUTHENTICATION: e70010c670c34ed1be518fcc81c52794:7339f22109fa4f5bab65c4221df3f05bbcbe1cf562914c329d11dd2d21342195" https://minor-demo.revelup.com//resources/AdjustedForecastedSalesResource/?format=json



curl -k --request POST --url http://159.65.134.100:3000/schedule --header 'accept: application/json'   --header 'content-type: application/json' --data '{"user_id": 657723,"type":"clockin","time":1534685995}'




curl -X GET --header "API-AUTHENTICATION: e70010c670c34ed1be518fcc81c52794:7339f22109fa4f5bab65c4221df3f05bbcbe1cf562914c329d11dd2d21342195" https://minor-demo.revelup.com/enterprise/Establishment/?format=json


curl -X GET --header "API-AUTHENTICATION: e70010c670c34ed1be518fcc81c52794:7339f22109fa4f5bab65c4221df3f05bbcbe1cf562914c329d11dd2d21342195" https://minor-demo.revelup.com/resources/Address/?format=json

curl -X GET --header "API-AUTHENTICATION: e70010c670c34ed1be518fcc81c52794:7339f22109fa4f5bab65c4221df3f05bbcbe1cf562914c329d11dd2d21342195" https://minor-demo.revelup.com/resources/Role/?id=7&format=json


 






<faultcode>SOAP-ENV:Server</faultcode>
<faultstring>BIP3113E: Exception detected in message flow SA_Datastream (integration node TESTNODE_TongZ) </faultstring>
<faultactor>http://localhost:7800/sync/datastream</faultactor>
<detail>
<text>Exception. 

BIP2230E: Error detected whilst processing a message in node &apos;SA_Datastream.Get Locations&apos;. : F:\build\slot2\S1000_P\src\DataFlowEngine\SQLNodeLibrary\ImbComputeNode.cpp: 515: ImbComputeNode::evaluate: ComIbmComputeNode: SA_Datastream#FCMComposite_1_3

BIP2488E:  (&apos;.SA_Datastream_Get_Locations.Main&apos;, &apos;7.3&apos;) Error detected whilst executing the SQL statement &apos;&apos;PROPAGATE TO TERMINAL &apos;out&apos; MESSAGE OutputRoot FINALIZE DEFAULT DELETE DEFAULT;&apos;&apos;. : F:\build\slot2\S1000_P\src\DataFlowEngine\ImbRdl\ImbRdlStatementGroup.cpp: 792: SqlStatementGroup::execute: : 

BIP2230E: Error detected whilst processing a message in node &apos;SA_Datastream.Sync Datastream&apos;. : F:\build\slot2\S1000_P\src\DataFlowEngine\SQLNodeLibrary\ImbComputeNode.cpp: 515: ImbComputeNode::evaluate: ComIbmComputeNode: SA_Datastream#FCMComposite_1_4
BIP2488E:  (&apos;.SA_Datastream_Sync_Datastream.Main&apos;, &apos;42.4&apos;) Error detected whilst executing the SQL statement &apos;&apos;PROPAGATE TO TERMINAL &apos;out1&apos; ENVIRONMENT OutputLocalEnvironment MESSAGE OutputRoot FINALIZE DEFAULT DELETE DEFAULT;&apos;&apos;. : F:\build\slot2\S1000_P\src\DataFlowEngine\ImbRdl\ImbRdlStatementGroup.cpp: 792: SqlStatementGroup::execute: : 
BIP2230E: Error detected whilst processing a message in node &apos;SA_Datastream.Sync DS-Sales&apos;. : F:\build\slot2\S1000_P\src\DataFlowEngine\TemplateNodes\ImbRequestTemplateNode.cpp: 611: ImbRequestTemplateNode::processMessageAssemblyToFailure: ComIbmRESTRequestNode: SA_Datastream#FCMComposite_1_8

BIP6375E: REST request node &apos;&apos;SA_Datastream.Sync DS-Sales&apos;&apos; failed to invoke the operation &apos;&apos;CreateDataStream&apos;&apos;. : F:\build\slot2\S1000_P\src\WebServices\REST\ImbRestRequestNode.cpp: 235: ImbRestRequestNode::requestData: :

BIP6373E: REST request node &apos;&apos;SA_Datastream.Sync DS-Sales&apos;&apos; invoked the operation &apos;&apos;CreateDataStream&apos;&apos;. The operation was unsuccessful. HTTP status code: &apos;401&apos;, response headers: &apos;838&apos; bytes, response body: &apos;52&apos; bytes, total request time: &apos;203&apos; ms. : F:\build\slot2\S1000_P\src\WebServices\REST\ImbRestRequestNode.cpp: 197: ImbRestRequestNode::requestData: : 

</text></detail>
</SOAP-ENV:Faul


<Authorization>bearer 9df07a927cbcd8e2a5223363b69cdd0edd7d4ffc70bcf66f1abd31713949d14d</Authorization>
<name>ts6_81420_ds</name>
<data_interval>900</data_interval>

curl -k --request POST --url https://staging.tanda.co/api/v2/datastreams --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer 9df07a927cbcd8e2a5223363b69cdd0edd7d4ffc70bcf66f1abd31713949d14d' --data '{"name": "ts6_81420_ds","data_interval":900,}'



SELECT T.SITE_NUMBER,T.LOCATION_ID FROM M_LOCATION AS T where T.LOCATION_ID IS NOT NULL AND T.LOCATION_ID not in (select TS.LOC_ID from M_STORESTAT AS TS WHERE TS.DS_TYPE='sales')


 

Inactive department

IF role = inactive THEN department_flag = 1

IF inactive prior to creating department THEN
  IF department = inactive 
    OR employe = inactive
    OR enrolment = inactive THEN do something



curl -k -G -X POST --header 'accept: application/json' --header 'content-type: application/json' --header 'API-AUTHENTICATION: e70010c670c34ed1be518fcc81c52794:7339f22109fa4f5bab65c4221df3f05bbcbe1cf562914c329d11dd2d21342195' --data '{"created_date":"2018-08-13T01:00:00", "updated_date":"2018-08-13T01:00:00", "shift_begin_time":"", "shift_end_time":"", "created_by":"/enterprise/User/6/", "updated_by":"/enterprise/User/6/", "department": "", "role":"", employee: "", "establishment":"",  "resource_uri":"", "stage":""}' https://minor-demo.revelup.com/resources/TimeSchedule


<department>/resources/Department/2/</department>
<created_by>/enterprise/User/6/</created_by>
<updated_by>/enterprise/User/6/</updated_by>
<stage>0</stage>
<shift_begin_time>2018-08-27T09:00:00</shift_begin_time>
<shift_end_time>2018-08-27T17:00:00</shift_end_time>
<updated_date>2018-08-31T09:06:16</updated_date>
<created_date>2018-08-31T09:06:16</created_date>


SELECT MR.RESOURCE_URI_EST AS ESTID, MR.RESOURCE_URI_ROLE AS ROLEID, ME.RESOURCE_URI AS EMPID 
FROM M_EMPLOYEE AS ME, M_ROLE AS MR 
WHERE ME.ID_DEPARTMENT = MR.ID 
  AND ME.ID = 665439
  AND ME.ID_DEPARTMENT = InputRoot.JSON.Data.schedules.Item[i].schedules.Item[j].department_id
				




<SOAP-ENV:Fault>
<faultcode>SOAP-ENV:Server</faultcode>
<faultstring>BIP3113E: Exception detected in message flow SA_Clockin (integration node TESTNODE_TongZ) </faultstring>
<faultactor>http://localhost:7800/sync/clockin</faultactor>
<detail><text>Exception. BIP2230E: Error detected whilst processing a message in node &apos;SA_Clockin.Get_Stage Clockin&apos;. : F:\build\slot2\S1000_P\src\DataFlowEngine\SQLNodeLibrary\ImbComputeNode.cpp: 515: ImbComputeNode::evaluate: ComIbmComputeNode: SA_Clockin#FCMComposite_1_4
BIP2488E:  (&apos;.SA_Clockin_Get_Stage_Clockin.Main&apos;, &apos;17.3&apos;) Error detected whilst executing the SQL statement &apos;&apos;PROPAGATE TO TERMINAL &apos;out&apos; ENVIRONMENT OutputLocalEnvironment FINALIZE DEFAULT DELETE DEFAULT;&apos;&apos;. : F:\build\slot2\S1000_P\src\DataFlowEngine\ImbRdl\ImbRdlStatementGroup.cpp: 792: SqlStatementGroup::execute: : 
BIP2230E: Error detected whilst processing a message in node &apos;SA_Clockin.Form Param&apos;. : F:\build\slot2\S1000_P\src\DataFlowEngine\SQLNodeLibrary\ImbComputeNode.cpp: 515: ImbComputeNode::evaluate: ComIbmComputeNode: SA_Clockin#FCMComposite_1_8
BIP2488E:  (&apos;.SA_Clockin_FormParam.Main&apos;, &apos;167.4&apos;) Error detected whilst executing the SQL statement &apos;&apos;PROPAGATE FINALIZE DEFAULT DELETE DEFAULT;&apos;&apos;. : F:\build\slot2\S1000_P\src\DataFlowEngine\ImbRdl\ImbRdlStatementGroup.cpp: 792: SqlStatementGroup::execute: : 
BIP2230E: Error detected whilst processing a message in node &apos;SA_Clockin.Invoke /clockins&apos;. : F:\build\slot2\S1000_P\src\DataFlowEngine\TemplateNodes\ImbRequestTemplateNode.cpp: 611: ImbRequestTemplateNode::processMessageAssemblyToFailure: ComIbmRESTRequestNode: SA_Clockin#FCMComposite_1_7
BIP6375E: REST request node &apos;&apos;SA_Clockin.Invoke /clockins&apos;&apos; failed to invoke the operation &apos;&apos;ClockInOut&apos;&apos;. : F:\build\slot2\S1000_P\src\WebServices\REST\ImbRestRequestNode.cpp: 235: ImbRestRequestNode::requestData: : 
BIP6360E: REST request node &apos;&apos;SA_Clockin.Invoke /clockins&apos;&apos; cannot invoke operation &apos;&apos;ClockInOut&apos;&apos;. The parameter &apos;&apos;Authorization&apos;&apos; is marked as required, but a value has not been specified for that parameter. : F:\build\slot2\S1000_P\src\WebServices\REST\ImbRestCommonRequestNode.cpp: 920: ImbRestCommonRequestNode::buildRequestData: : </text></detail>
</SOAP-ENV:Fault>
</SOAP-ENV:Body>


curl -k --url https://staging.tanda.co/api/v2/rosters/current --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer fd017ba711bb082a8e368a6c17260d9966e69db9efbbeb9f7f4e3983ea416733'


<Authorization>bearer fd017ba711bb082a8e368a6c17260d9966e69db9efbbeb9f7f4e3983ea416733</Authorization>


POST https://my.tanda.co/api/v2/storestats/for_datastream/115611
{
  "time": 1536276600,
  "stat": 42216.90000000,
  "type": "sales"
}

curl -k --request POST --url https://staging.tanda.co/api/v2/storestats/for_datastream/115611 --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer a6b032b8d232b921b0c31f758d5712972b1d260c6a37dd705c0cde6f3be35bb7' --data '{"time": 1536276600,"stat":42216.90000000, "type": "sales"}'

loc_id = 82316
ds_actual = 115597
ds_adjust = 115611


curl -k --url https://staging.tanda.co/api/v2/datastreams/115578 --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer a6b032b8d232b921b0c31f758d5712972b1d260c6a37dd705c0cde6f3be35bb7' 

curl -k --request POST --url https://staging.tanda.co/api/v2/storestats/for_datastream/115578 --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer a6b032b8d232b921b0c31f758d5712972b1d260c6a37dd705c0cde6f3be35bb7' --data '{"time": 1536276600,"stat":42216.90000000, "type": "sales"}'

curl -k --request PUT --url https://staging.tanda.co/api/v2/locations/82477 --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer a6b032b8d232b921b0c31f758d5712972b1d260c6a37dd705c0cde6f3be35bb7' --data '{"short_name": "123456"}'




BIP2488E:  (&apos;.SA_Sales_Log_Sales.Main&apos;, &apos;11.7&apos;) Error detected whilst executing the SQL statement &apos;&apos;SET t = CAST(&apos;4:14 PM&apos; AS TIME FORMAT &apos;hh:mm a&apos;);&apos;&apos;. : F:\build\slot2\S1000_P\src\DataFlowEngine\ImbRdl\ImbRdlStatementGroup.cpp: 792: SqlStatementGroup::execute: : 

BIP2521E: (&apos;.SA_Sales_Log_Sales.Main&apos;, &apos;11.15&apos;) : Error casting the value &apos;&apos;&apos;4:14 PM&apos;&apos;&apos; to &apos;&apos;TIME&apos;&apos;. : F:\build\slot2\S1000_P\src\DataFlowEngine\ImbRdl\ImbRdlTypeCast.cpp: 260: SqlTypeCast::evaluate: : 

BIP3204S: Input expression &apos;&apos;4:14 PM&apos;&apos; does not match FORMAT expression &apos;&apos;hh:mm a&apos;&apos;. Parsing failed to match &apos;&apos;4:14 PM&apos;&apos; with &apos;&apos;hh&apos;&apos;. : F:\build\slot2\S1000_P\src\CommonServices\ImbTimeStampFormatter.cpp: 2048: ImbTimeStampFormatter::parseData: : </text></detail>



BIP2230E: Error detected whilst processing a message in node &apos;SA_ActualSales.Prepare Report&apos;. : F:\build\slot2\S1000_P\src\DataFlowEngine\SQLNodeLibrary\ImbComputeNode.cpp: 515: ImbComputeNode::evaluate: ComIbmComputeNode: SA_ActualSales#FCMComposite_1_7
BIP2488E:  (&apos;.SA_Sales_Prepare_Report.Main&apos;, &apos;22.4&apos;) Error detected whilst executing the SQL statement &apos;&apos;PROPAGATE TO TERMINAL &apos;out&apos; ENVIRONMENT OutputLocalEnvironment FINALIZE DEFAULT DELETE DEFAULT;&apos;&apos;. : F:\build\slot2\S1000_P\src\DataFlowEngine\ImbRdl\ImbRdlStatementGroup.cpp: 792: SqlStatementGroup::execute: : 
BIP2230E: Error detected whilst processing a message in node &apos;SA_ActualSales.Log Sales&apos;. : F:\build\slot2\S1000_P\src\DataFlowEngine\SQLNodeLibrary\ImbComputeNode.cpp: 515: ImbComputeNode::evaluate: ComIbmComputeNode: SA_ActualSales#FCMComposite_1_8
BIP2488E:  (&apos;.SA_Sales_Log_Sales.Main&apos;, &apos;19.1&apos;) Error detected whilst executing the SQL statement &apos;&apos;SET target = CAST(source AS TIME FORMAT pattern);&apos;&apos;. : F:\build\slot2\S1000_P\src\DataFlowEngine\ImbRdl\ImbRdlStatementGroup.cpp: 792: SqlStatementGroup::execute: : 
BIP2521E: (&apos;.SA_Sales_Log_Sales.Main&apos;, &apos;19.14&apos;) : Error casting the value &apos;&apos;&apos;16:18:30&apos;&apos;&apos; to &apos;&apos;TIME&apos;&apos;. : F:\build\slot2\S1000_P\src\DataFlowEngine\ImbRdl\ImbRdlTypeCast.cpp: 260: SqlTypeCast::evaluate: : 

BIP3204S: Input expression &apos;&apos;16:18:30&apos;&apos; does not match FORMAT expression &apos;&apos;hh:mm:ss&apos;&apos;. Parsing failed to match &apos;&apos;16&apos;&apos; with &apos;&apos;hh&apos;&apos;. : F:\build\slot2\S1000_P\src\CommonServices\ImbTimeStampFormatter.cpp: 1317: ImbTimeStampFormatter::subParse: : </text></detail>

DECLARE t TIME; 
SET t = CAST('4:14 PM' AS TIME FORMAT 'K:mm a');

SET a = CAST(count AS CHARACTER) || ' -- ' || CAST(CURRENT_TIME AS CHARACTER FORMAT 'K:mm a')  || ' | ' || CAST(t AS CHARACTER) ||' --> ';

WHILE i <= count DO
SET a = a || InputRoot.JSON.Data.quarters.Item[i].Item[1] || '...' ||  CAST(InputRoot.JSON.Data.quarters.Item[i].Item[2].sales AS CHARACTER)  || ' xxx ';


{"p":"96 -- 3:04 PM | TIME '16:14:16.497252' --> 11:00 PM - 11:14 PM...0E+0 xxx 11:15 PM - 11:29 PM...0E+0 xxx 11:30 PM - 11:44 PM...0E+0 xxx 11:45 PM - 11:59 PM...0E+0 xxx 12:00 AM - 12:14 AM...0E+0 xxx 12:15 AM - 12:29 AM...0E+0 xxx 12:30 AM - 12:44 AM...0E+0 xxx 12:45 AM - 12:59 AM...0E+0 xxx 01:00 AM - 01:14 AM...0E+0 xxx 01:15 AM - 01:29 AM...0E+0 xxx 01:30 AM - 01:44 AM...0E+0 xxx 01:45 AM - 01:59 AM...0E+0 xxx 02:00 AM - 02:14 AM...0E+0 xxx 02:15 AM - 02:29 AM...0E+0 xxx 02:30 AM - 02:44 AM...0E+0 xxx 02:45 AM - 02:59 AM...0E+0 xxx 03:00 AM - 03:14 AM...0E+0 xxx 03:15 AM - 03:29 AM...0E+0 xxx 03:30 AM - 03:44 AM...0E+0 xxx 03:45 AM - 03:59 AM...0E+0 xxx 04:00 AM - 04:14 AM...0E+0 xxx 04:15 AM - 04:29 AM...0E+0 xxx 04:30 AM - 04:44 AM...0E+0 xxx 04:45 AM - 04:59 AM...0E+0 xxx 05:00 AM - 05:14 AM...0E+0 xxx 05:15 AM - 05:29 AM...0E+0 xxx 05:30 AM - 05:44 AM...0E+0 xxx 05:45 AM - 05:59 AM...0E+0 xxx 06:00 AM - 06:14 AM...0E+0 xxx 06:15 AM - 06:29 AM...0E+0 xxx 06:30 AM - 06:44 AM...0E+0 xxx 06:45 AM - 06:59 AM...0E+0 xxx 07:00 AM - 07:14 AM...0E+0 xxx 07:15 AM - 07:29 AM...0E+0 xxx 07:30 AM - 07:44 AM...0E+0 xxx 07:45 AM - 07:59 AM...0E+0 xxx 08:00 AM - 08:14 AM...0E+0 xxx 08:15 AM - 08:29 AM...0E+0 xxx 08:30 AM - 08:44 AM...0E+0 xxx 08:45 AM - 08:59 AM...0E+0 xxx 09:00 AM - 09:14 AM...0E+0 xxx 09:15 AM - 09:29 AM...0E+0 xxx 09:30 AM - 09:44 AM...0E+0 xxx 09:45 AM - 09:59 AM...0E+0 xxx 10:00 AM - 10:14 AM...0E+0 xxx 10:15 AM - 10:29 AM...0E+0 xxx 10:30 AM - 10:44 AM...0E+0 xxx 10:45 AM - 10:59 AM...0E+0 xxx 11:00 AM - 11:14 AM...0E+0 xxx 11:15 AM - 11:29 AM...0E+0 xxx 11:30 AM - 11:44 AM...0E+0 xxx 11:45 AM - 11:59 AM...0E+0 xxx 12:00 PM - 12:14 PM...0E+0 xxx 12:15 PM - 12:29 PM...0E+0 xxx 12:30 PM - 12:44 PM...0E+0 xxx 12:45 PM - 12:59 PM...0E+0 xxx 01:00 PM - 01:14 PM...0E+0 xxx 01:15 PM - 01:29 PM...0E+0 xxx 01:30 PM - 01:44 PM...0E+0 xxx 01:45 PM - 01:59 PM...0E+0 xxx 02:00 PM - 02:14 PM...0E+0 xxx 02:15 PM - 02:29 PM...0E+0 xxx 02:30 PM - 02:44 PM...0E+0 xxx 02:45 PM - 02:59 PM...0E+0 xxx 03:00 PM - 03:14 PM...0E+0 xxx 03:15 PM - 03:29 PM...0E+0 xxx 03:30 PM - 03:44 PM...0E+0 xxx 03:45 PM - 03:59 PM...0E+0 xxx 04:00 PM - 04:14 PM...0E+0 xxx 04:15 PM - 04:29 PM...0E+0 xxx 04:30 PM - 04:44 PM...0E+0 xxx 04:45 PM - 04:59 PM...0E+0 xxx 05:00 PM - 05:14 PM...0E+0 xxx 05:15 PM - 05:29 PM...0E+0 xxx 05:30 PM - 05:44 PM...0E+0 xxx 05:45 PM - 05:59 PM...0E+0 xxx 06:00 PM - 06:14 PM...0E+0 xxx 06:15 PM - 06:29 PM...0E+0 xxx 06:30 PM - 06:44 PM...0E+0 xxx 06:45 PM - 06:59 PM...0E+0 xxx 07:00 PM - 07:14 PM...0E+0 xxx 07:15 PM - 07:29 PM...0E+0 xxx 07:30 PM - 07:44 PM...0E+0 xxx 07:45 PM - 07:59 PM...0E+0 xxx 08:00 PM - 08:14 PM...0E+0 xxx 08:15 PM - 08:29 PM...0E+0 xxx 08:30 PM - 08:44 PM...0E+0 xxx 08:45 PM - 08:59 PM...0E+0 xxx 09:00 PM - 09:14 PM...0E+0 xxx 09:15 PM - 09:29 PM...0E+0 xxx 09:30 PM - 09:44 PM...0E+0 xxx 09:45 PM - 09:59 PM...0E+0 xxx 10:00 PM - 10:14 PM...0E+0 xxx 10:15 PM - 10:29 PM...0E+0 xxx 10:30 PM - 10:44 PM...0E+0 xxx 10:45 PM - 10:59 PM...0E+0 xxx "}





{
  "p":"96 -- 5:06 PM | 4:14 PM --> 
  
  11:00 PM - 11:14 PM...0E+0 yyy 
  11:15 PM - 11:29 PM...0E+0 yyy 
  11:30 PM - 11:44 PM...0E+0 yyy 
  11:45 PM - 11:59 PM...0E+0 yyy 
  12:00 AM - 12:14 AM...0E+0 yyy 
  12:15 AM - 12:29 AM...0E+0 yyy 
  12:30 AM - 12:44 AM...0E+0 yyy 12:45 AM - 12:59 AM...0E+0 yyy 01:00 AM - 01:14 AM...0E+0 yyy 01:15 AM - 01:29 AM...0E+0 yyy 01:30 AM - 01:44 AM...0E+0 yyy 01:45 AM - 01:59 AM...0E+0 yyy 02:00 AM - 02:14 AM...0E+0 yyy 02:15 AM - 02:29 AM...0E+0 yyy 02:30 AM - 02:44 AM...0E+0 yyy 02:45 AM - 02:59 AM...0E+0 yyy 03:00 AM - 03:14 AM...0E+0 yyy 03:15 AM - 03:29 AM...0E+0 yyy 03:30 AM - 03:44 AM...0E+0 yyy 03:45 AM - 03:59 AM...0E+0 yyy 04:00 AM - 04:14 AM...0E+0 yyy 04:15 AM - 04:29 AM...0E+0 yyy 04:30 AM - 04:44 AM...0E+0 yyy 04:45 AM - 04:59 AM...0E+0 yyy 05:00 AM - 05:14 AM...0E+0 yyy 05:15 AM - 05:29 AM...0E+0 yyy 05:30 AM - 05:44 AM...0E+0 yyy 05:45 AM - 05:59 AM...0E+0 yyy 06:00 AM - 06:14 AM...0E+0 yyy 06:15 AM - 06:29 AM...0E+0 yyy 06:30 AM - 06:44 AM...0E+0 yyy 06:45 AM - 06:59 AM...0E+0 yyy 07:00 AM - 07:14 AM...0E+0 yyy 07:15 AM - 07:29 AM...0E+0 yyy 07:30 AM - 07:44 AM...0E+0 yyy 07:45 AM - 07:59 AM...0E+0 yyy 08:00 AM - 08:14 AM...0E+0 yyy 08:15 AM - 08:29 AM...0E+0 yyy 08:30 AM - 08:44 AM...0E+0 yyy 08:45 AM - 08:59 AM...0E+0 yyy 09:00 AM - 09:14 AM...0E+0 yyy 09:15 AM - 09:29 AM...0E+0 yyy 09:30 AM - 09:44 AM...0E+0 yyy 09:45 AM - 09:59 AM...0E+0 yyy 10:00 AM - 10:14 AM...0E+0 yyy 10:15 AM - 10:29 AM...0E+0 yyy 10:30 AM - 10:44 AM...0E+0 yyy 10:45 AM - 10:59 AM...0E+0 yyy 11:00 AM - 11:14 AM...0E+0 yyy 11:15 AM - 11:29 AM...0E+0 yyy 11:30 AM - 11:44 AM...0E+0 yyy 11:45 AM - 11:59 AM...0E+0 yyy 12:00 PM - 12:14 PM...0E+0 yyy 12:15 PM - 12:29 PM...0E+0 yyy 12:30 PM - 12:44 PM...0E+0 yyy 12:45 PM - 12:59 PM...0E+0 yyy 01:00 PM - 01:14 PM...0E+0 yyy 01:15 PM - 01:29 PM...0E+0 yyy 01:30 PM - 01:44 PM...0E+0 yyy 01:45 PM - 01:59 PM...0E+0 yyy 02:00 PM - 02:14 PM...0E+0 yyy 02:15 PM - 02:29 PM...0E+0 yyy 02:30 PM - 02:44 PM...0E+0 yyy 02:45 PM - 02:59 PM...0E+0 yyy 03:00 PM - 03:14 PM...0E+0 yyy 03:15 PM - 03:29 PM...0E+0 yyy 03:30 PM - 03:44 PM...0E+0 yyy 03:45 PM - 03:59 PM...0E+0 yyy 04:00 PM - 04:14 PM...0E+0 yyy 04:15 PM - 04:29 PM...0E+0 yyy 04:30 PM - 04:44 PM...0E+0 yyy 04:45 PM - 04:59 PM...0E+0 yyy 05:00 PM - 05:14 PM...0E+0 xxx 05:15 PM - 05:29 PM...0E+0 yyy 05:30 PM - 05:44 PM...0E+0 yyy 05:45 PM - 05:59 PM...0E+0 yyy 06:00 PM - 06:14 PM...0E+0 yyy 06:15 PM - 06:29 PM...0E+0 yyy 06:30 PM - 06:44 PM...0E+0 yyy 06:45 PM - 06:59 PM...0E+0 yyy 07:00 PM - 07:14 PM...0E+0 yyy 07:15 PM - 07:29 PM...0E+0 yyy 07:30 PM - 07:44 PM...0E+0 yyy 07:45 PM - 07:59 PM...0E+0 yyy 08:00 PM - 08:14 PM...0E+0 yyy 08:15 PM - 08:29 PM...0E+0 yyy 08:30 PM - 08:44 PM...0E+0 yyy 08:45 PM - 08:59 PM...0E+0 yyy 09:00 PM - 09:14 PM...0E+0 yyy 09:15 PM - 09:29 PM...0E+0 yyy 09:30 PM - 09:44 PM...0E+0 yyy 09:45 PM - 09:59 PM...0E+0 yyy 10:00 PM - 10:14 PM...0E+0 yyy 10:15 PM - 10:29 PM...0E+0 yyy 10:30 PM - 10:44 PM...0E+0 yyy 10:45 PM - 10:59 PM...0E+0 yyy "}


curl -k --request POST --url https://staging.tanda.co/api/v2/storestats/for_datastream/115600 --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer 544ed961573261e9f0a23f2bef738bdc90a88c0ac145d2df0c62342ddd8e6e76' --data '{"time": 1536496791,"stat":0.00, "type": "sales"}'


  <Authorization>bearer 544ed961573261e9f0a23f2bef738bdc90a88c0ac145d2df0c62342ddd8e6e76</Authorization>
<id>115600</id>
<time>1536496791</time>
<stat>0.00</stat>
<type>sales</type>


curl -k --request POST  --url https://staging.tanda.co/api/v2/datastreamjoins   --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer 544ed961573261e9f0a23f2bef738bdc90a88c0ac145d2df0c62342ddd8e6e76'   --data '{"data_stream_id":115613,"data_streamable_type":"Location","data_streamable_id":82649, "rostering_ratio":15 }'

<data_stream_id>115613</data_stream_id>
<data_streamable_type>Location</data_streamable_type>
<data_streamable_id>82649</data_streamable_id>
<rostering_ratio>15</rostering_ratio>



GET https://my.tanda.co/api/v2/timesheets/for/123456/on/2018-09-09?show_costs=true&show_award_interpretation=true

> curl -k --url https://staging.tanda.co/api/v2/users --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer 979d2ef336bf3c2fa7163f99046cd7cb9c3912ce9115abac4c3b44b6d890ae1d'


GET 

curl -k --url https://staging.tanda.co/api/v2/timesheets/on/2018-09-09?show_costs=true&show_award_interpretation=true --header 'accept: application/json' --header 'content-type: application/json' --header 'Authorization: bearer 44ed961573261e9f0a23f2bef738bdc90a88c0ac145d2df0c62342ddd8e6e76'


GET https://my.tanda.co/api/v2/timesheets/on/2016-03-02?show_costs=true&show_award_interpretation=true



[
    {
        "id": 7508726,
        "user_id": 670317,
        "start": "2018-09-03",
        "finish": "2018-09-09",
        "status": "approved",
        "shifts": [
            {
                "id": 415
                03926,
                "timesheet_id": 7508726,
                "user_id": 670317,
                "date": "2018-09-09",
                "start": 1536458400,
                "break_start": null,
                "break_finish": null,
                "break_length": 30,
                "finish": 1536487200,
                "department_id": null,
                "sub_cost_centre": null,
                "tag": null,
                "tag_id": null,
                "status": "APPROVED",
                "metadata": null,
                "leave_request_id": null,
                "award_interpretation": [
                    {
                        "units": 3.75,
                        "date": "2018-09-09",
                        "export_name": "Base Hourly",
                        "ordinary_hours": true,
                        "cost": 0,
                        "from": 1536473700,
                        "to": 1536487200
                    },
                    {
                        "units": 3.75,
                        "date": "2018-09-09",
                        "export_name": "Base Hourly",
                        "ordinary_hours": true,
                        "cost": 0,
                        "from": 1536458400,
                        "to": 1536471900
                    }
                ],
                "allowances": [],
                "cost": 0,
                "updated_at": 1536499379,
                "last_costed_at": 1536499380
            }
        ],
        "total_cost": 0,
        "updated_at": 1536499380
    },
    {
        "id": 7504748,
        "user_id": 670312,
        "start": "2018-09-03",
        "finish": "2018-09-09",
        "status": "pending",
        "shifts": [],
        "total_cost": 0,
        "updated_at": 1536316252
    }
]


-------------------
-------------------




<Data>
<Item>
<id>41533375</id>
<timesheet_id>7510986</timesheet_id>
<user_id>670315</user_id>
<date>2018-09-07</date>
<start>1536285600</start>
<break_start/>
<break_finish/>
<break_length>30</break_length>
<finish>1536314400</finish>
<department_id/>
<sub_cost_centre/>
<tag/>
<tag_id/>
<status>PENDING</status>
<metadata/>
<leave_request_id/>
<allowances/>
<updated_at>1536526247</updated_at>
</Item>
<Item>
<id>41533374</id>
<timesheet_id>7510987</timesheet_id>
<user_id>670317</user_id>
<date>2018-09-08</date>
<start>1536372000</start>
<break_start/>
<break_finish/>
<break_length>30</break_length>
<finish>1536400800</finish>
<department_id/>
<sub_cost_centre/>
<tag/>
<tag_id/>
<status>PENDING</status>
<metadata/>
<leave_request_id/>
<allowances/>
<updated_at>1536526192</updated_at>
</Item>



curl -vvv -k --request POST --url https://uat-mds.themall.co.th/tmg/icfs/membercard --header 'accept: application/json' --header 'content-type: application/json' --header 'x-ibm-client-id: 7f654ce8-d394-4fb2-baea-27553663e51a' --header 'x-ibm-client-secret: nG4pV7tL8fS8tT6xL0qF4xB8eV3sG5oO5yC8gY7uX4mI5qR1mK' --data '{""MBCODE"":""7109000900003026""}'

curl -vvv -k --request POST --url https://uat-mds.themall.co.th/scb/sb/inquiry_mpoint --header 'accept: application/json' --header 'content-type: application/json' --header 'x-ibm-client-id: d2014527-2f56-43a5-a718-8bc20a4ced8c' --header 'X-ibm-client-secret: Y1nM7pN5aK1xH1xP5bP4dQ1rO1hU2nI2fV3sA1bN0cF2dR2uY7' --data '{""PARTNER_ID"": ""10200"",""PARTNER_NBR"": ""4548529000000006""}'


curl -X GET --header "API-AUTHENTICATION: e70010c670c34ed1be518fcc81c52794:7339f22109fa4f5bab65c4221df3f05bbcbe1cf562914c329d11dd2d21342195" https://minor-demo.revelup.com/resources/Employee/?format=json



curl -vvv -k --request POST --url https://uat-mds.themall.co.th/scb/sb/inquiry_mpoint --header 'accept: application/json' --header 'content-type: application/json' --header 'x-ibm-client-id: d2014527-2f56-43a5-a718-8bc20a4ced8c' --header 'X-ibm-client-secret: Y1nM7pN5aK1xH1xP5bP4dQ1rO1hU2nI2fV3sA1bN0cF2dR2uY7' --data '{"PARTNER_ID": "10200","PARTNER_NBR": "4548529000000006"}'


curl -k --request POST --url https://uat-mds.themall.co.th/scb/sb/validateid --header 'accept: application/json' --header 'content-type: application/json' --header 'x-ibm-client-id: ad7d4232-9e54-47a0-b559-b2d48f046b3b' --header 'X-ibm-client-secret: eC4vC8dF5bN7gG2jU3dG6dC5nU0cV8mR7bJ2gQ6pQ6cV4uM4mV' --data '{"CUST_ID":"3001598793505"}'








curl -k --request POST --url https://my.tanda.co/api/v2/clockins --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer f8dccd339263afe65615d96e9aa5e3c067cd62798a79af0f51dea345b35b5bd2' --data '{"user_id": 676284,"type":"clockin","time":1537315497}'