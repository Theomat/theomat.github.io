import numpy as np
import gym

env = gym.make("CartPole-v0")

env.seed(0)
env.action_space.seed(0)
np.random.seed(0)

NB_STATES = 162 # 3 * 3 * 6 * 3

def obs_to_state(obv):
    x, x_dot, theta, theta_dot = obv

    # X_pos Pass
    if x < -.8:
        state = 0
    elif x < .8:
        state = 1
    else:
        state = 2

    # X_velocity Pass
    if x_dot < -.5:
        pass
    elif x_dot < .5:
        state += 3
    else:
        state += 6

    if theta < np.radians(-12):
        pass
    elif theta < np.radians(-1.5):
        state += 9
    elif theta < np.radians(0):  # goldzone
        state += 18
    elif theta < np.radians(1.5):
        state += 27
    elif theta < np.radians(12):
        state += 36
    else:
        state += 45

    if theta_dot < np.radians(-50):
        pass
    elif theta_dot < np.radians(50):
        state += 54
    else:
        state += 108

    return state