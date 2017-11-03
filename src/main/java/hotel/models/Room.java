package hotel.models;

import javax.persistence.*;

@Entity
@Table(name = "Room")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="roomid")
    private int roomid;

    @Column(name = "room_desk")
    private String room_desk;

    @Column(name = "capacity")
    private String capacity;

    @Column(name = "room_type")
    private String room_type;

    @Column(name = "cost_per_day")
    private String cost_per_day;

    @Column(name = "availability")
    private String availability;

    public int getRoomid() {
        return roomid;
    }

    public void setRoomid(int roomid) {
        this.roomid = roomid;
    }

    public String getRoom_desk() {
        return room_desk;
    }

    public void setRoom_desk(String room_desk) {
        this.room_desk = room_desk;
    }

    public String getCapacity() {
        return capacity;
    }

    public void setCapacity(String capacity) {
        this.capacity = capacity;
    }

    public String getRoom_type() {
        return room_type;
    }

    public void setRoom_type(String room_type) {
        this.room_type = room_type;
    }

    public String getCost_per_day() {
        return cost_per_day;
    }

    public void setCost_per_day(String cost_per_day) {
        this.cost_per_day = cost_per_day;
    }

    public String getAvailability() {
        return availability;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
    }
}
