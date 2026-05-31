import os
from google import genai
from google.genai import types
from flask import Flask,request,jsonify,render_template
app=Flask(__name__)   
client=genai.Client(api_key=os.getenv("GEMINI_API_KEY"))
@app.route("/")
def home():
    return render_template('UI.html')
@app.route("/chat",methods=["POST"])
def chat():
    data=request.json
    user_message=data["message"]
    
    config=types.GenerateContentConfig(
        system_instruction="you are a career guidance and higher studies guide in India"
    )
    try:
      response=client.models.generate_content(
          model="gemini-2.5-flash",
          contents=user_message,
          config=config
      )
      reply=response.text
    except Exception as e:
        print(f"API ERROR DETAILS{e}")  
        reply="there is some issue in fetching data through API try again after some time" 
    return jsonify({
        'reply':reply
    })    
if __name__=="__main__":
 app.run(debug=True)
        
    