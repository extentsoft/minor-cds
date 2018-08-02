
# Approach
1. sync all location 
2. sync all team
3. nnn
4. nnnn

# Location
1. get Establishment from revel into _m_location
2. get Address from revel into _m_location
3. get User[manager] from revel into _m_manager
4. select compulsory fields from _m_location into TANDA[location]
5. store location_id into _m_location

# DataStream
1. get site_number from _m_location
2. select compulsory fields from _m_location into TANDA[datastream]
3. store datastream_id into _m_location

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