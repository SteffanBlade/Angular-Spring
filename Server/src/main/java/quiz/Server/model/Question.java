package quiz.Server.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class Question {
    private final UUID Id;
    private final String Question;
    private final String CorectAnswer;
    private final String Answer1;
    private final String Answer2;

    public Question(@JsonProperty("Id") UUID id,
                    @JsonProperty("Question") String question,
                    @JsonProperty("CorectAnswer") String corectAnswer,
                    @JsonProperty("Answer1") String answer1,
                    @JsonProperty("Answer2") String answer2) {
        Id = id;
        Question = question;
        CorectAnswer = corectAnswer;
        Answer1 = answer1;
        Answer2 = answer2;
    }

    public String getAnswer1() {
        return Answer1;
    }

    public String getAnswer2() {
        return Answer2;
    }

    public String getCorectAnswer() {
        return CorectAnswer;
    }

    public String getQuestion() {
        return Question;
    }

    public UUID getId() {
        return Id;
    }
}

