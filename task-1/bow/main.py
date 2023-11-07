import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from fastapi import FastAPI
from models import TextBow, Text
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS for local development
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

@app.get("/bow/api/v1")
async def root():
    return {"message": "This is a FastAPI project for Adaptavist."}

@app.post("/bow/api/v1")
async def root(text: Text):
    result = TextBow()
    cv = CountVectorizer()
    X = cv.fit_transform([Text.preprocess(text.content)])
    df = pd.DataFrame(X.toarray(), columns=cv.get_feature_names_out(), index=["count"])
    sorted_df = df.sort_values(by="count", ascending=False, axis=1)

    for feature in sorted_df:
        result.features += "{word}: {count}\n".format(word=feature, count=sorted_df[feature]["count"])
    
    return result