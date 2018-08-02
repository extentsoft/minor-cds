# Credential
```
url:  https://staging.tanda.co/dashboard
user: thanapir@metrosystems.co.th
pass: P@ssw0rdmsc

https://my.tanda.co/api/oauth/access_tokens
```

# Locations 
```
curl --header "Authorization: bearer 8b948cd56c9df2deb3ee678b688f560beb87dd695eba68ff1ca3c08c87b44121" \
https://my.tanda.co/api/v2/locations
```

# User
```
curl --header "Authorization: bearer 8b948cd56c9df2deb3ee678b688f560beb87dd695eba68ff1ca3c08c87b44121" \
https://my.tanda.co/api/v2/users/me

curl --header "Authorization: bearer 8b948cd56c9df2deb3ee678b688f560beb87dd695eba68ff1ca3c08c87b44121" \
https://my.tanda.co/api/v2/users?show_wages=true
```

# Departments
```
GET https://my.tanda.co/api/v2/departments/111
```

# Data Stream each store 
```
1 data stream per store location 
ex. "sales-store1", "sales-store2"
```



