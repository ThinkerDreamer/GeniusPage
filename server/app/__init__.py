from flask import Flask
from flask import request, jsonify
import openai
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from dataclasses import dataclass
from sqlalchemy import create_engine
from sqlalchemy import Column, String, Integer, ForeignKey

openai.api_key = 'key'
engine = create_engine('postgresql://@@', echo=True)
Session = sessionmaker(bind=engine)
session = Session()
Base = declarative_base()

app = Flask(__name__, static_folder='index.html')


@dataclass
class LandingPage(Base):
    __tablename__ = 'landing_page'

    id_landing_page = Column(Integer, primary_key=True)
    business_name = Column(String(40))
    tagline_1 = Column(String(200))
    tagline_2 = Column(String(200))
    tagline_3 = Column(String(200))
    advertising_text_1 = Column(String(250))
    advertising_text_2 = Column(String(250))
    advertising_text_3 = Column(String(250))
    review = Column(String(200))
    id_user = Column(Integer, ForeignKey('user_info.id_user'))

    users = relationship('User')

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

@dataclass
class User(Base):
    __tablename__ = 'user_info'

    id_user = Column(Integer, primary_key=True)
    name_user = Column(String(40))

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}




#Get info of landing page
@app.route("/request-landing-page", methods=['GET', 'POST'])
def request_landing_page():
    data = request.get_json()

    query = session.query(LandingPage).filter(LandingPage.id_landing_page == data['id_landing_page']).all()

    query = [s.as_dict() for s in query]

    return jsonify({'response': query})

#Generate text and image fot the landing page
@app.route("/generate-idea", methods=['POST'])
def generate_landing_page_infos():
    data = request.get_json()
    data = data['text']

    tagline = f"Write a tagline sentence for a {data}, maximum 20 characters and without period."
    advertising_text = f"Write an advertising text for a {data}, maximum two sentence, less than 100 characters and without period."
    business_name = f"Write a business name of one word for a {data}, maximum 10 characters"
    review = f"Write a review sentence praising service about {data}, maximum 35 characters"

    response = {}

    response["business_name"] = openai.Completion.create(engine='text-davinci-001', prompt=business_name, max_tokens=8)
    response["business_name"] = response["business_name"]['choices'][0]['text']

    response["tagline_1"] = openai.Completion.create(engine='text-davinci-001', prompt=tagline, max_tokens=11)
    response["tagline_1"] = response["tagline_1"]['choices'][0]['text']
    
    response["tagline_2"] = openai.Completion.create(engine='text-davinci-001', prompt=tagline, max_tokens=11)
    response["tagline_2"] = response["tagline_2"]['choices'][0]['text']

    response["tagline_3"] = openai.Completion.create(engine='text-davinci-001', prompt=tagline, max_tokens=11)
    response["tagline_3"] = response["tagline_3"]['choices'][0]['text']

    response["advertising_text_1"] = openai.Completion.create(engine='text-davinci-001', prompt=advertising_text, max_tokens=40)
    response["advertising_text_1"] = response["advertising_text_1"]['choices'][0]['text']

    advertising_text_2 = f"Write a advertising text with maximum of two sentence and less than 100 characters based on this phrase: {response['tagline_2']}"
    response["advertising_text_2"] = openai.Completion.create(engine='text-davinci-001', prompt=advertising_text_2, max_tokens=40)
    response["advertising_text_2"] = response["advertising_text_2"]['choices'][0]['text']

    advertising_text_3 = f"Write a advertising with maximum of two sentence and less than 100 characters based on this phrase: {response['tagline_3']}"
    response["advertising_text_3"] = openai.Completion.create(engine='text-davinci-001', prompt=advertising_text_3, max_tokens=40)
    response["advertising_text_3"] = response["advertising_text_3"]['choices'][0]['text']

    response['review'] = openai.Completion.create(engine='text-davinci-001', prompt=review, max_tokens=25)
    response['review'] = response["review"]['choices'][0]['text']

    response['idea'] = data['text']
    response['id_landing_page'] = 2

    data = LandingPage(**response)
    session.add(data)
    session.commit()

    return jsonify({'response': response})

#Update landing Page infos
@app.route("/update-land-page", methods=['PUT'])
def update_landing_page():
    data = request.get_json()

    query = session.query(User).filter(data['id_landing_page'] == LandingPage.id_landing_page).update(query)
    session.commit()
    
    return {'response': 'OK'}

#Delete landing page
@app.route("/del-land-page", methods=['DELETE'])
def delete_landing_page_infos():
    data = request.get_json()

    session.query(LandingPage).filter(data['id_landing_page'] == LandingPage.id_landing_page).delete()
    session.commit()

    return {'response': "OK"}

#----------------------

#Get idea to generate page
@app.route("/idea", methods=['GET'])
def generate_idea():

    new_idea = f"Write just one idea of business with 9 words"
    
    response = openai.Completion.create(engine='text-davinci-001', prompt=new_idea, max_tokens=20)

    return {'response': response['choices'][0]['text']}

#----------------------

#Update user info
@app.route("/user-update", methods=['PUT'])
def user_update():
    data = request.get_json()

    session.query(User).filter(data['id_user'] == User.id_user).update(data)
    session.commit()
    
    return {'response': 'ok'}

#user landing pages
@app.route("/user-landing-pages", methods=['GET', 'POST'])
def user_landing_pages():
    data = request.get_json()
    
    query = session.query(LandingPage).filter(LandingPage.id_user == data['id_user']).all()
    query = [s.as_dict() for s in query]

    return jsonify({'response': query})

#----------------------
