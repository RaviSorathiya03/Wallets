import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { Keypair } from "@solana/web3.js";
import { NextResponse } from "next/server";
import bs58 from "bs58";

export async function POST(){
    try {
        const user = await currentUser()
        if(!user){
            return NextResponse.json({
                message: "User Not Found"
            }, {status: 401})
        }

        const checkUser = await prisma.user.findFirst({
            where: {
                email: user.emailAddresses[0].emailAddress
            }
        })

        if(checkUser){
            return NextResponse.json({
                message: "User already exist in the db"
            }, {status: 200})
        }

        const keypair = Keypair.generate();
        const secretKey = bs58.encode(keypair.secretKey);

        const SaveUser = await prisma.user.create({
            data: {
                id: user.id,
                email: user.emailAddresses[0].emailAddress,
                firstname: user.firstName as string,
                lastname: user.lastName as string,
                wallet: {
                    create: {
                        publicKey: keypair.publicKey.toBase58(),
                        privateKey: secretKey,
                    }
                }
            }
        })

        return NextResponse.json({
            message: "User Created",
            data: SaveUser
        }, {status:  200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong"
        }, {status: 500})
    }
}