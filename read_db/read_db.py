# coding=UTF-8
import sqlite3

# 创建连接对象
conn = sqlite3.connect('home-assistant_v2.db')

# 获取天气状况
def weatherState():
    with conn:
        weather_state = conn.execute("select state from states where domain = 'weather' order by state_id desc limit 0, 1")
        for i in weather_state:
            print(i)

weatherState()