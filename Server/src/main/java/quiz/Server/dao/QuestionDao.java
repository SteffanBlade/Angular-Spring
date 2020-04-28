package quiz.Server.dao;

import quiz.Server.model.Question;

import java.util.List;
import java.util.UUID;

public interface QuestionDao {

    int addQuestion (UUID Id, Question question);

    default int addQuestion(Question question){
        UUID id = UUID.randomUUID();
        return addQuestion(id,question);
    };

    List<Question> selectAllQuestion();
}
