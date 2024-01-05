package com.example.HRdecknewjoinee.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Role {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)

        private Integer roleId;


        private String roleName;


        public Role() {
        }


        public Role(String roleName) {
            this.roleName = roleName;
        }

        // Getters and Setters

        public Integer getRoleId() {
            return roleId;
        }

        public void setRoleId(Integer roleId) {
            this.roleId = roleId;
        }

        public String getRoleName() {
            return roleName;
        }

        public void setRoleName(String roleName) {
            this.roleName = roleName;
        }
    }
