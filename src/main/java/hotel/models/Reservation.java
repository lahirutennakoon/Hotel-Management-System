package hotel.models;
import javax.persistence.*;

@Entity
@Table(name = "Reservation")
public class Reservation {



    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long rid;

    @Column(name = "customer_name ")
    private String customerName;

    @Column(name = "venue")
    private String venue;

    @Column(name="date")
    private String date;

    @Column(name="time")
    private String time;

    @Column (name="number_of_people")
    private int numberOfPeople;

    public long getRid() {
        return rid;
    }

    public void setRid(long rid) {
        this.rid = rid;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getVenue() {
        return venue;
    }

    public void setVenue(String venue) {
        this.venue = venue;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public int getNumberOfPeople() {
        return numberOfPeople;
    }

    public void setNumberOfPeople(int numberOfPeople) {
        this.numberOfPeople = numberOfPeople;
    }
}
