curl -X GET --header "API-AUTHENTICATION: e70010c670c34ed1be518fcc81c52794:7339f22109fa4f5bab65c4221df3f05bbcbe1cf562914c329d11dd2d21342195" https://minor-demo.revelup.com/reports/hourly_sales/json/?show_unpaid=1&show_irregular=1&range_from=2016B08B01+02:00&range_to=2016B08B02+02:00&establishment=1&format=json

curl -X GET --header "API-AUTHENTICATION: e70010c670c34ed1be518fcc81c52794:7339f22109fa4f5bab65c4221df3f05bbcbe1cf562914c329d11dd2d21342195" https://minor-demo.revelup.com/reports/hourly_sales/json/?establishment=1&range_from=2016-08-01+02:00&range_to=2016-08-02+02:00



Result1: 
{"error": "'NoneType' object has no attribute 'number_of_weeks_to_forecast'"}

