package hotel.models;

import javax.persistence.*;

@Entity
@Table(name = "Event")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="eventid")
    private int eventid;

    @Column(name = "billed_to")
    private String billed_to;

    @Column(name = "event_name")
    private String event_name;

    @Column(name = "event_date")
    private String event_date;

    @Column(name = "time_from")
    private String time_from;

    @Column(name = "time_to")
    private String time_to;

    @Column(name = "total_cost")
    private String total_cost;

    @Column(name = "approval_state")
    private String approval_state;

    @Column(name = "added_date")
    private String added_date;

    @Column(name = "event_state")
    private String event_state;

    public int getEventid() {
        return eventid;
    }

    public void setEventid(int eventid) {
        this.eventid = eventid;
    }

    public String getBilled_to() {
        return billed_to;
    }

    public void setBilled_to(String billed_to) {
        this.billed_to = billed_to;
    }

    public String getEvent_name() {
        return event_name;
    }

    public void setEvent_name(String event_name) {
        this.event_name = event_name;
    }

    public String getEvent_date() {
        return event_date;
    }

    public void setEvent_date(String event_date) {
        this.event_date = event_date;
    }

    public String getTime_from() {
        return time_from;
    }

    public void setTime_from(String time_from) {
        this.time_from = time_from;
    }

    public String getTime_to() {
        return time_to;
    }

    public void setTime_to(String time_to) {
        this.time_to = time_to;
    }

    public String getTotal_cost() {
        return total_cost;
    }

    public void setTotal_cost(String total_cost) {
        this.total_cost = total_cost;
    }

    public String getApproval_state() {
        return approval_state;
    }

    public void setApproval_state(String approval_state) {
        this.approval_state = approval_state;
    }

    public String getAdded_date() {
        return added_date;
    }

    public void setAdded_date(String added_date) {
        this.added_date = added_date;
    }

    public String getEvent_state() {
        return event_state;
    }

    public void setEvent_state(String event_state) {
        this.event_state = event_state;
    }
}
