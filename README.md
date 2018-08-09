# minor-iib



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