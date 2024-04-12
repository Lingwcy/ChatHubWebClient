import { Auth } from '../services/AuthService';
import { Friends,UserRequest } from '../services/FriendsService';
import { GroupService } from '../services/GroupService';
import { ChatHub } from '../services/HubService';
import { Message } from '../services/MessageService';
import { UserApi } from '../services/UserService';


export interface IUseFriendsStore{
    $reset(): unknown;
    FriendTree:FriendTree | undefined,
    Friends: Friend[],
    RequestList: UserRequest[]
    TargetUserProfile: IUserProfile | undefined
}

declare export interface IChatStore {
    targetUserTab: TargetUserTab[]
    selectedTab: number
}

declare export interface IGroupStore{
    SearchGroup:Group[]
    SelectedGroup:Group
    SearchUser:IUserProfile[]
    SelectedUser:IUserProfile
}

declare export interface Group{
    GroupId:number,
    GroupName:string,
    GroupDescription:string,
    CreationDate:string,
    CreatorUserId:number,
    IsDeleted:boolean,
    MemberNumber:number,
    GroupHeader:string,
}
//存储与用户正在聊天的Tab信息
interface TargetUserTab {
    tabTitle: string;
    tabName: string;
    targetUserMessage: TargetUserMessage;
}
//存储目标聊天用户的相关信息。名称，聊天内容...
interface TargetUserMessage {
    targetUserName: string,
    messages: string[],
    messageNames: string[],
    messageHeaders: string[],
}

interface IService {
    Auth:Auth | undefined,
    ChatHub:ChatHub| undefined,
    Friend:Friends| undefined,
    Message:Message| undefined,
    User:UserApi | undefined
    Group:GroupService | undefined
}
