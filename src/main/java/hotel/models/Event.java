package hotel.models;
import javax.persistence.*;

@Entity
@Table(name = "Event")
public class Event {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long eid;

    @Column(name = "customer_name ")
    private String customerName;

    @Column(name = "event_type")
    private String eventType;

    @Column(name="date")
    private String date;

    @Column(name="expected_guests_number")
    private int expectedGuestsNumber;

    public long getEid() {
        return eid;
    }

    public void setEid(long eid) {
        this.eid = eid;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getEventType() {
        return eventType;
    }

    public void setEventType(String eventType) {
        this.eventType = eventType;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getExpectedGuestsNumber() {
        return expectedGuestsNumber;
    }

    public void setExpectedGuestsNumber(int expectedGuestsNumber) {
        this.expectedGuestsNumber = expectedGuestsNumber;
    }
}
