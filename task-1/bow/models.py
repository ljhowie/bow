from pydantic import BaseModel, Field

class Text(BaseModel):
    name: str
    content: str
    
    @staticmethod
    def preprocess(input: str) -> str:
      result = ""
      result = input.lower()

      return result

class TextBow(BaseModel):
    features: str = Field(default= "")