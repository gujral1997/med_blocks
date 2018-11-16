# zCoin
# Basic Crypto-Currency 

# Documentation

## 1 Requirements

### 1.1 Python3

### 1.2 Postman (not mandatory)

1. You can check API calls by using Postman.
2. Download postman from [here](https://www.getpostman.com/).

### 1.3 Flask
1. I am using version `0.12.2`. So, I also recommend the same verision to be used.
2. Install flask using `pip3 install Flask==0.12.2`.

## 2 Running the code

1. After navigating to root directory in terminal, type `python3 blockchain.py`
2. HTTP Server will start on `0.0.0.0:5000`

### 2.1 You can check the pre-bulit functionalities by calling following GET requests:

1. For retreiving the complete chain: `0.0.0.0:5000/get_chain`
2. For mining a new block: `0.0.0.0:5000/mine_block`
3. To check validity of the block chain: `0.0.0.0:5000/is_valid`
