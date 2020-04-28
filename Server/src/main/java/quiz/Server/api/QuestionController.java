package quiz.Server.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import quiz.Server.model.Question;
import quiz.Server.service.QuestionService;

import java.util.List;
@CrossOrigin
@RequestMapping("api/question")
@RestController
public class QuestionController {
    private final QuestionService questionService;

    @Autowired
    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;

    }
    @PostMapping
    public void addQuestion(@RequestBody Question question){
        questionService.insertQuestion(question);
    }

    @GetMapping
    public List<Question> getAllQuestion(){
        return questionService.getAllQuestion();
    }
}
