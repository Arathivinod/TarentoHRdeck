package com.example.HRdecknewjoinee.Entities;

import jakarta.persistence.*;

@Entity
public class Ibu {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)

        private Integer ibuId;

        private String ibuName;


        private String manager;


        public Ibu() {
        }


        public Ibu(String ibuName, String manager) {
            this.ibuName = ibuName;
            this.manager = manager;
        }

        // Getters and Setters

        public Integer getIbuId() {
            return ibuId;
        }

        public void setIbuId(Integer ibuId) {
            this.ibuId = ibuId;
        }

        public String getIbuName() {
            return ibuName;
        }

        public void setIbuName(String ibuName) {
            this.ibuName = ibuName;
        }

        public String getManager() {
            return manager;
        }

        public void setManager(String manager) {
            this.manager = manager;
        }
    }
