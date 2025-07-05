import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PortfolioController {

    @GetMapping("/about")
    public String getAbout() {
        return "Experienced Java Developer with 3 years of hands-on experience.";
    }

    @GetMapping("/skills")
    public List<String> getSkills() {
        return List.of("Java", "Spring Boot", "Docker", "AWS");
    }

    @GetMapping("/projects")
    public List<String> getProjects() {
        return List.of("Hotel Booking System", "Airbnb Clone");
    }
}
