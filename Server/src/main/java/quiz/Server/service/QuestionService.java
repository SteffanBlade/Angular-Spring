package quiz.Server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import quiz.Server.dao.QuestionDao;
import quiz.Server.model.Question;

import java.util.List;

@Service
public class QuestionService {
    public final QuestionDao questionDao;

    @Autowired
    public QuestionService(@Qualifier("FakeDao") QuestionDao questionDao) {
        this.questionDao = questionDao;
    }

    public int insertQuestion(Question question){
        return questionDao.addQuestion(question);
    }

    public List<Question> getAllQuestion (){
        return questionDao.selectAllQuestion();
    };
}
