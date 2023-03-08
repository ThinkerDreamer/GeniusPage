from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from flask_sqlalchemy import SQLAlchemy
from dataclasses import dataclass

from .DDL import Base

db = SQLAlchemy()

@dataclass
class LandingPage(Base):
    __tablename__ = 'landing_pages'

    id_landing_page = Column(Integer, primary_key=True)
    business_name = Column(String(40))
    tagline_1 = Column(String(200))
    tagline_2 = Column(String(200))
    tagline_3 = Column(String(200))
    advertising_text_1 = Column(String(250))
    advertising_text_2 = Column(String(250))
    advertising_text_3 = Column(String(250))
    review = Column(String(200))
    id_user = Column(String(40), ForeignKey('users.id_user'))
    idea = Column(String(250))

    users = relationship('User')

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

@dataclass
class User(Base):
    __tablename__ = 'users'

    id_user = Column(String(40), primary_key=True)
    name_user = Column(String(40))

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
