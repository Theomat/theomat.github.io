# AlphaGo

This project has multiple milestones and is **due for January the 31st 11:59PM**.

You will be in teams of **two**.

Here is a short presentation as a **5min read**, additional details of what is to be done are present at the end.

## Why choose AlphaGo as a project?

We will tackle this problem from an engineering perspective of having a problem to solve.
We will implement the solution ourselves from **end-to-end**.
As such this is very close to a R&D situation in a company.

This is a nice item on your resume because everybody in the field knows about it, it's one of the biggest milestone of AI in the last 5 years.

**All of the necessary concepts will be seen and studied in class.**
This will increase your mastery of RL, MCTS and supervised learning.
And finally it will help you master PyTorch if that is not already the case.

## So what is Go?

![go board](https://cdn.vox-cdn.com/thumbor/M2Oq9r-N4DM4TQEosAHTGzAtcIg=/0x0:2500x1667/1280x854/cdn.vox-cdn.com/uploads/chorus_image/image/49020255/akrales_160307_0970_a_0127.0.0.png)

Simple rules:

- place a stone at each turn
- control as much territory as possible
- enclosed stones are captured

Additional data:

- Size of the state space: 2.10^170 (atoms in universe: 10^130)
- Size of the action space: 200
- No good evaluation function
- Local and global features (symmetries, freedom, ...)
- A move might make a difference some dozen plies later

## A brief History

1997, DeepBlue beats Kasparov at chess.

In 2012, beating humans at Go was considered something we would not be able to do until 2030/2040.

In 2016, AlphaGo beat world champion Lee Sedol 4-1.
Five months prior, Lee Sedol was confident he would win 5-0 or maybe 4-1.

In the following years, they sent AlphaGo to play many matches with a lot of professionals, and AlphaGo won every single match even against teams of humans.

DeepMind made better versions of AlphaGo afterwards, one of the latest AlphaZero beats the version used that played against Lee Sedol 100-0.

## How did it work?

The main idea is to combine Monte Carlo Tree Search (MCTS) with Neural Networks (NN) to guide the search.
First, we expand the tree of possible future game boards.
Then we select a leaf node that is a board configuration that is not yet expanded, then we execute a *rollout*.
A *rollout* is a a play from a given configuration until a winner is decided, a rollout can be made with only random plays, or it can be improved upon with better than random plays.
The most promising nodes, tthat is the most promisng game configurations, are expanded according to a Multi Armed Bandit (MAP) scheme.

The NN is trained via Reinforcement Learning (RL) and enables the new approach to outclass and outperform previous similar approaches by guiding the MAB and the rollouts.

## What are we going to do?

You will be given a Go engine in Python.
We will have 14h40 of courses to explore the subject, expect the first few hours to be mainly explanations while the remaining hours will be more oriented towards discussion on your problems and strategies.
Note that this is a project and working only in class will **not** be enough.

Milestones:

1. Write a functional random MCTS player in Go.
2. Train a NN on human games and guide the MCTS with your NN.
3. Add the RL training.

You will hand in the code along with a README explaining what you have done and your choices.

## References and resources

- Alpha Go paper, <https://storage.googleapis.com/deepmind-media/alphago/AlphaGoNaturePaper.pdf>
- AlphaGo Zero paper, <https://www.nature.com/articles/nature24270.epdf?author_access_token=VJXbVjaSHxFoctQQ4p2k4tRgN0jAjWel9jnR3ZoTv0PVW4gB86EEpGqTRDtpIz-2rmo8-KG06gqVobU5NSCFeHILHcVFUeMsbvwS-lxjqQGg98faovwjxeTUgZAUMnRQ>
- Alpha Zero paper, <https://arxiv.org/abs/1712.01815>
- Wikipedia page on AlphaGo, <https://en.wikipedia.org/wiki/AlphaGo>
- The AlphaGo Movie, <https://www.youtube.com/watch?v=WXuK6gekU1Y>
- ELF Go, Facebook's implementation of AlphaGo, <https://arxiv.org/abs/1902.04522>
- Accelerating self-play learning, <https://arxiv.org/abs/1902.10565>