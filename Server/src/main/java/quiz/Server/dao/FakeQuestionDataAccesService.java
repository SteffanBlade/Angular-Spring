package quiz.Server.dao;

import org.springframework.stereotype.Repository;
import quiz.Server.model.Question;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository("FakeDao")
public class FakeQuestionDataAccesService implements QuestionDao {

    private static List<Question> DB = new ArrayList<>();

    @Override
    public int addQuestion(UUID Id, Question question) {
        DB.add(new Question(Id,question.getQuestion(),question.getCorectAnswer(),question.getAnswer1(),question.getAnswer2()));
        return 1;
    }

    @Override
    public List<Question> selectAllQuestion() {
        return DB;
    }
}
