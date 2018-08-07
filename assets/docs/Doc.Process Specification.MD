# Location (Establishment)
## Create New Location
![xxx](https://www.lucidchart.com/publicSegments/view/7e335f0d-6f2a-4516-a710-92992d076ca0/image.png "xx")

## Terminate Location
![xxx](https://www.lucidchart.com/publicSegments/view/40bdee7b-5ca4-43f8-87e6-afb8b4317baa/image.png "xx")

# Team (Role)

## Create New Role
![xx](https://www.lucidchart.com/publicSegments/view/18c04c07-48cc-4230-b409-5a63a3beb16a/image.png "xx")

## Update Role 
![xx](https://www.lucidchart.com/publicSegments/view/31363817-9eba-41bd-814d-0018891c9887/image.png "xx")

# Employee
## Create New Employee
![xx](https://www.lucidchart.com/publicSegments/view/feeb8920-1626-4781-b3fe-538582b0e56d/image.png xx)

## Update New Emploee
![xx](https://www.lucidchart.com/publicSegments/view/458e5f4d-b830-48a3-b901-ba3d7656db5b/image.png "xx")



# DataStream
![xx](https://www.lucidchart.com/documents/edit/27428051-3782-4442-88ab-5c3eaeb72c9d/7 "XX")
![xx](https://www.lucidchart.com/publicSegments/view/1037621f-1712-4d6d-9ccc-2b770993b72d/image.png "xx")


# Team
1. get EmployeeRoleEstablishment into _m_store_management #establishment_id #role_id #user_id
2. get Role and merge into _m_store_management
3. select compulsory fields from _m_store_management into TANDA[team]
4. store team_id into _m_store_management

# DataStreamJoin
1. select location_id,datastream_id from _m_location into TANDA[datastreamjoin]


# User
1. get User and merge into _m_store_management 
2. select compulsory fields from _m_store_management into TANDA[user]
3. store user_id into _m_store_management
4. select user_id,department_id from _m_store_management update TANDA[user]
5. select user_id,managed_department_id from _m_store_management update TANDA[user]


# StoreStat
1. get 