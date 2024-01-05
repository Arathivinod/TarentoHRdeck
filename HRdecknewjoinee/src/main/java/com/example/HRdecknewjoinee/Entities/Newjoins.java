package com.example.HRdecknewjoinee.Entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;

@Entity
@Getter
@Setter
public class Newjoins {

    @Id
    private Integer empId;

    private String empName;
    private String empAddress;
    private String empExperience;
    private String empQuote;
    private String empHobbie;
    private String empEmail;
    private String empPhone;
    private String empSkills;
    private String Wwib;
    @ManyToOne
    @JoinColumn(name = "edu_id")
    private Education eduId;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role roleId;

    @ManyToOne
    @JoinColumn(name = "ibu_id")
    private Ibu ibuId;

    // Constructors

    public Newjoins() {
        // Default constructor required by JPA
    }

    public Newjoins(
            String empName,
            String empAddress,
            String empExperience,
            String empQuote,
            String empHobbie,
            String empEmail,
            String empPhone,
            String empSkills,
            Education eduId,
            Role roleId,
            Ibu ibuId,
            String Wwib
    ) {
        this.empName = empName;
        this.empAddress = empAddress;
        this.empExperience = empExperience;
        this.empQuote = empQuote;
        this.empHobbie = empHobbie;
        this.empEmail = empEmail;
        this.empPhone = empPhone;
        this.empSkills = empSkills;
        this.eduId = eduId;
        this.roleId = roleId;
        this.ibuId = ibuId;
        this.Wwib = Wwib;
    }

}
