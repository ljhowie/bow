# BOW

BOW is a Python FastAPI project created for Adaptavist interview. It's a backend service performing the text processing tasks.

## Run locally using uvicorn

```bash
# create Python virtual environment.
python -m venv venv

# activate venv.
./venv/Scripts/activate

# install all libs from the given requirements file.
pip install --requirement requirements.txt

# All set. Ready to run locally with auto-reload enabled.
uvicorn main:app --reload
```
