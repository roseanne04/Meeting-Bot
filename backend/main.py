from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "ClearMeet Backend is running!"}
