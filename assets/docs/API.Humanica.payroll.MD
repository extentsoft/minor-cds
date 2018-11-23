# Payroll
Shifts represent actual times worked for a user and are contained in a Timesheet. 

```
Employee Payroll
	Submission 1,16PM
	scope 1-15,16-30
Reference
- Path, filename, ip - refer to excel
```


# Interface Specification
Endpoint: SFTP 
Filename: EM_RV_MS_yyyyMMdd.csv 
Type: csv 
Encoding: utf8
Header Row: no
Quote Enabled: yes
Delimeter: “,”

# Schedule
Submission: every 1st,16th of each month 
Scope: 1-15th, 16-30th

# Folder Structure
/SRC - source file for Humanica
/DST
/ARC - copy of source file





> GET https://my.tanda.co/api/v2/shifts?ids=1,2,1337&user_ids=1,2,123456&from=2016-03-02&to=2016-03-02& show_costs=true&show_award_interpretation=true&report_location_id=111

> curl -k --url https://staging.tanda.co/api/v2/users --header 'accept: application/json'   --header 'content-type: application/json'   --header 'Authorization: bearer e49d3c43b8a3ef388c57717186902b5b3423a3c7a88f863b9194115c6c287c59'


```
/shifts:
    get:
      operationId: "GetShifts"
      summary: 'Get Shifts'
      description: 'Shifts represent actual times worked for a user and are contained in a Timesheet'
      consumes:
        - application/json 
      produces:
        - application/json 
      parameters:
      - name: "Authorization"
        in: "header"
        type: "string"
        required: true
      - name: ""
        in: "query"
        type: "string"
        required: false
      responses:
        200:
          description: OK
    post:
      operationId: "CreateLocation"
      responses:
        200:
          description: "The operation was successful."
      consumes:
      - "application/json"
      produces:
      - "application/json"
      description: "Create a location"
      parameters:
      - name: "Authorization"
        in: "header"
        type: "string"
        required: true
      - name: "body"
        required: true
        in: "body"
        schema:
          type: "object"
        description: "body_data"
```

# ewfwefw