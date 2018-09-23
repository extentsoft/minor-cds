

-- Check whether time records exist
IF CAST(InputRoot.JSON.Data.meta.total_count AS INTEGER) > 0 THEN	

  WHILE i < count DO
    
    -- IGNORE RECORDS PROCESSED
    IF e_row_count = 0 OR e_emp_count <= 0 THEN
      
      -- PERFORM CLOCKIN
      IF InputRoot.JSON.Data.objects.Item[i].clock_out IS NULL THEN
        
      -- PERFORM CLOCKOUT
      ELSE 
        
        -- PERFORM ONLY CLOCKOUT
        IF worklog_count > 0 THEN

        -- PERFORM BOTH CLOCKIN and CLOCKOUT
        ELSE
        
        END IF;
      
      END IF;
  
    END IF;
    
    SET i = i + 1;
  END WHILE;
  
ELSE
  
END IF;
