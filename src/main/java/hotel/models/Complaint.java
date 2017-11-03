package hotel.models;

import javax.persistence.*;


@Entity
@Table(name = "Complaint")
public class Complaint {


    public long getCid() {
        return cid;
    }

    public void setCid(long cid) {
        this.cid = cid;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
    }

    public String getSuggessions() {
        return suggessions;
    }

    public void setSuggessions(String suggessions) {
        this.suggessions = suggessions;
    }



        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)

        private long cid;

        @Column(name = "customer_name ")
        private String customerName;

        @Column(name = "description")
        private String description;

        @Column(name="date_created")
        private String dateCreated;

        @Column(name="suggessions")
        private String suggessions;
    }

