package com.hachionUserDashboard.entity;

public class Education {
	 private String degree;
	    private String institute;
	    private String location;
	    private String date;
	    
	    public Education() {
	    	
	    }

		public String getDegree() {
			return degree;
		}

		public void setDegree(String degree) {
			this.degree = degree;
		}

		public String getInstitute() {
			return institute;
		}

		public void setInstitute(String institute) {
			this.institute = institute;
		}

		public String getLocation() {
			return location;
		}

		public void setLocation(String location) {
			this.location = location;
		}

		public String getDate() {
			return date;
		}

		public void setDate(String date) {
			this.date = date;
		}

		public Education(String degree, String institute, String location, String date) {
			super();
			this.degree = degree;
			this.institute = institute;
			this.location = location;
			this.date = date;
		}

		@Override
		public String toString() {
			return "Education [degree=" + degree + ", institute=" + institute + ", location=" + location + ", date="
					+ date + "]";
		}
}
