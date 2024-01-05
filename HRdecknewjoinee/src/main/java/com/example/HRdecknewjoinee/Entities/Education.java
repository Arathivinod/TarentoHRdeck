package com.example.HRdecknewjoinee.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity

public class Education {


        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer eduId;

        private String eduName;

        public Education() {

        }

        public Education(String eduName) {
            this.eduName = eduName;
        }

        public Integer getEduId() {
            return eduId;
        }

        public void setEduId(Integer eduId) {
            this.eduId = eduId;
        }

        public String getEduName() {
            return eduName;
        }

        public void setEduName(String eduName) {
            this.eduName = eduName;
        }
    }

