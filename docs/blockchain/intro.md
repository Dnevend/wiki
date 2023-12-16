---
sidebar_position: 1
tags: [blockchain, btc]
---

## [UTXO 是什么？](https://nervosbook.github.io/book/zh/utxo.html) Unspent transaction output

比特币的区块链由一个个区块串联构成，而每个区块又包含一个或多个交易。

比特币中是没有账户这个概念的，所谓一个地址的余额，其实就是统计这个地址相关的所有交易，然后运算出来的。

如果我们观察任何一个交易，它总是由若干个输入（Input）和若干个输出（Output）构成，一个 Input 指向的是前面区块的某个 Output，只有 Coinbase 交易（矿工奖励的铸币交易）没有输入，只有凭空输出。所以，任何交易，总是可以由 Input 溯源到 Coinbase 交易。

还没有被下一个交易花费的 Output 被称为 UTXO：Unspent TX Output，即未花费交易输出。给定任何一个区块，计算当前所有的 UXTO 金额之和，等同于自创世区块到给定区块的挖矿奖励之和。

因此，比特币的交易模型和我们平时使用的银行账号有所不同，它并没有账户这个说法，只有 UTXO。想要确定某个人拥有的比特币，并无法通过某个账户查到，必须知道此人控制的所有 UTXO 金额之和。

小明给小刚转账 1 比特币。整个过程是这样的，小明要收集足够的输入，比如小明的地址对应的以往交易中，找到了一个面值为 0.9 的 UTXO，不够 1 比特币，好在交易中是允许有多个输入的，所以小明又找到了一个面值 0.2 的 UTXO，这样在这次转账的交易中，就会有两个输入。同时输出也会有两个，一个是指向小刚地址，面值是 1 比特币。另一个指向小明的地址，面值是 0.1 比特币，这个输出就是找零了。

梳理一下，整个流程是这样的：小明首先要凑够足够面额的 Input，这里他找到了两个 Input，而这两个 Input 本身都是以往交易的 Output。这两个 Output 在未消费之前，就是 UTXO，但是当前交易一旦生效，它们两个就会被消耗掉，而本交易中又会生成两个新的 UTXO，一个指向小明，一个指向小刚。相当于小明和小刚各种领到手一个硬币，未来可以在其他交易中去消费。而小明和小刚各自地址的余额，其实就是各自对应的所有 UTXO 的总和。

[bitcoin-paper](https://bitcoin.org/files/bitcoin-paper/bitcoin_zh_cn.pdf)

[bitcoin-whitepaper-chinese-translation](https://github.com/xiaolai/bitcoin-whitepaper-chinese-translation)